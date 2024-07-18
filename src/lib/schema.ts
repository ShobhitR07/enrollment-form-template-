import { number, z } from 'zod'

export const FormDataSchema = z.object({
  name: z.string().nonempty('Name is required.'),
  number: z
  .string()
  .nonempty('Number is required.')
  .min(10, { message: 'number must be at least 10 characters.' })
  .max(10, { message: 'number must be at least 10 characters.' }),
  message: z
    .string()
    .nonempty('Message is required.')
})

export const ContactFormSchema = z.object({
  name: z.string().nonempty('Name is required.'),
  email: z.string().nonempty('Email is required.').email('Invalid email.'),
  number: z.string().nonempty('Number is required.'),
  message: z
    .string()
    
   
})