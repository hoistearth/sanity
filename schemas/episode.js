import client from "part:@sanity/base/client"

import Slugger from "../utils/slugger"

export default {
  title: "Episode",
  name: "episode",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Episode",
      name: "episode",
      type: "number",
      validation: Rule => Rule.required().min(1),
    },

    {
      title: "Description",
      name: "description",
      type: "text",
      validation: Rule => Rule.required(),
    },
    {
      title: "Outline",
      name: "outline",
      type: "array",
      of: [{ type: "block" }],
      validation: Rule => Rule.required(),
    },
    {
      title: "Stream Promo Image",
      name: "stream_image",
      type: "image",
      validation: Rule => Rule.required(),
    },
    {
      title: "Stream Time",
      name: "stream_date",
      type: "datetime",
      validation: Rule => Rule.required(),
    },
    {
      title: "Aired Promo Image",
      name: "aired_image",
      type: "image",
    },
    {
      title: "Aired Date",
      name: "aired_date",
      type: "datetime",
    },
    {
      title: "YouTube Video ID",
      name: "youtube_id",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: doc => `${doc.stream_date.substr(0, 10)} ${doc.name}`,
        slugify: Slugger,
      },
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "name",
      episode: "episode",
      media: "stream_image",
    },
    prepare(selection) {
      const { title, episode, media } = selection
      return {
        title: `Ep ${episode}: ${title}`,
        subtitle: "",
        description: "",
        media: media,
      }
    },
  },
  initialValue: async () => ({
    episode:
      (await client.fetch(`
      count(*[_type == "episode"])
    `)) + 1,
  }),
  orderings: [
    {
      title: "Episode Ascending",
      name: "episodeAsc",
      by: [{ field: "episode", direction: "asc" }],
    },
    {
      title: "Episode Descending",
      name: "episodeDesc",
      by: [{ field: "episode", direction: "desc" }],
    },
  ],
}
