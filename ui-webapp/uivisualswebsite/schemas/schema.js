import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import blockContent from './blockContent'
import testimonial from './testimonial'
import team from './team'
import homepage from './homepage'
import social from './social'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    homepage,
    testimonial,
    team,
    blockContent,
    social
  ]),
})
