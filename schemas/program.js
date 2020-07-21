export default {
  title: "Progam",
  name: "program",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      }
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
    {
      title: "Content",
      name: "content",
      type: "text",
    },
    {
      title: "Image",
      name: "image",
      type: "program_image",
    },
    {
      title: "Highlighted",
      name: "highlighted",
      type: "boolean",
    },
  ]
}