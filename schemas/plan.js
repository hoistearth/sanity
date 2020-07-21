export default {
  title: "Plan",
  name: "plan",
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
      },
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
    {
      title: "Monthly Donation",
      name: "monthly_donation",
      type: "number",
      validation: Rule => Rule.required().min(0),
    },
    {
      title: "Stripe Pricing Plan ID",
      name: "stripe_pricing_plan_id",
      type: "string",
    },
  ],
}
