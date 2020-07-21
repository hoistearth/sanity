import createSchema from "part:@sanity/base/schema-creator"

import schemaTypes from "all:part:@sanity/base/schema-type"
import program from "./program"
import program_image from "./program_image"
import plan from "./plan"
import episode from "./episode"

export default createSchema({
  name: "default",
  types: schemaTypes.concat([program, program_image, plan, episode]),
})
