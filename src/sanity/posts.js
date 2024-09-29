import { defineType, defineField, defineArrayMember } from "sanity";

export const portfolios = defineType({
    name: 'posts',
    type: 'document',
    title: 'Portfolios',
    fields: [
        defineField({
            name: 'title',
            type:'string',
            title: 'Portfolio Title',
            description: 'Title of the Portfolio',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'heading',
            type: 'string',
            title: 'Portfolio Heading',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'service',
            type: 'string',
            title: 'Service Offered',
            options: {
                list: [
                    { title: 'sustainability management', value: 'sustainability management' },
                    { title: 'design to prototype', value: 'design to prototype' },
                    { title: 'trend curation', value: 'trend curation' },
                ]
            }
        }),
        defineField({
            name: 'slug',
            type:'slug',
            title: 'Slug',
            options: {
                source: 'title',
                slugify: (input) => input.toLowerCase().replace(/\s+/g, '-')
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'summary',
            type: 'text',
            title: 'Summary',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'date',
            type: 'date',
            title: 'Date',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Portfolio Image',
            hotspot: {

            }
        }),
        defineField({
            name: 'content',
            type: 'array',
            title: 'Blog Content',
            of: [
                defineArrayMember({
                type: 'block'
                })
            ]
        })
    ]
})