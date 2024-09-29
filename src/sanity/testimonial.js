import { defineType, defineField } from 'sanity';
export const testimonial = defineType({
    name: 'testimonial',
    type: 'document',
    title: 'Testimonials',
    fields: [
        defineField({
            name: 'quote',
            type: 'string',
            title: 'quote',
            description: 'The quote provided by the client.',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'profession',
            type: 'string',
            title: 'profession',
            description: 'The profession of the client.'
        }),
        defineField({
            name: 'client_name',
            type: 'string',
            title: 'Name',
            description: 'The name of the client'
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Profile Photo',
            description: 'The profile photo of the client.',
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'organization',
            type: 'string',
            title: 'Organization',
            description: 'The organization the client works at.'
        })
    ]
})