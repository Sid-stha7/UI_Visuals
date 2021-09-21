import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import blockContent from './blockContent'
import testimonial from './testimonial'
import events from './events'
import homepage from './homepage'
import social from './social'
import team from './team'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    homepage,
    testimonial,
    events,
    blockContent,
    team,
    social
  ]),
})
