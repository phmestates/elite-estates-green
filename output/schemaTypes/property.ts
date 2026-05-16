import {defineField, defineType} from 'sanity'

export const propertyType = defineType({
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'suburb',
      title: 'Suburb',
      type: 'string',
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price (Numeric)',
      description: 'Used for sorting/filtering. Set to 0 if Price Type is Contact Agent.',
      type: 'number',
    }),
    defineField({
      name: 'priceLabel',
      title: 'Price Label (Display text)',
      description: 'e.g., "$892,139", "Contact Agent", "Submit Offers"',
      type: 'string',
    }),
    defineField({
      name: 'priceType',
      title: 'Price Type',
      type: 'string',
      options: {
        list: [
          {title: 'Fixed Price', value: 'fixed'},
          {title: 'Contact Agent', value: 'contact'},
          {title: 'Submit Offers', value: 'offers'},
          {title: 'From Price', value: 'from'},
        ],
      },
    }),
    defineField({
      name: 'beds',
      title: 'Bedrooms',
      type: 'number',
    }),
    defineField({
      name: 'baths',
      title: 'Bathrooms',
      type: 'number',
    }),
    defineField({
      name: 'cars',
      title: 'Car Spaces',
      type: 'number',
    }),
    defineField({
      name: 'landArea',
      title: 'Land Area (m²)',
      type: 'number',
    }),
    defineField({
      name: 'floorArea',
      title: 'Floor Area (m²)',
      type: 'number',
    }),
    defineField({
      name: 'type',
      title: 'Property Type',
      type: 'string',
      options: {
        list: ['House', 'Unit', 'Land', 'Other'],
      },
      initialValue: 'House',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'House & Land', value: 'House & Land'},
          {title: 'Dual Key', value: 'Dual Key'},
          {title: 'Development Opportunity', value: 'Development Opportunity'},
        ],
      },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['For Sale', 'Under Contract', 'Sold'],
      },
      initialValue: 'For Sale',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'shortDesc',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'text',
      rows: 10,
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true, // Enables UI for cropping and focal points
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'address',
      media: 'image',
    },
  },
})
