'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import { BackgroundBeams } from './ui/background-beams'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { ContactFormSchema } from '@/lib/schema'
import { sendEmail } from '@/app/_actions'
import { toast } from 'sonner'



export type ContactFormInputs = z.infer<typeof ContactFormSchema>

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema)
  })

  const processForm: SubmitHandler<ContactFormInputs> = async data => {
    const result = await sendEmail(data)

    if (result?.success) {
      console.log({ data: result.data })
      toast.success('Enrollment form filled successfully!')
      reset()
      return
    }

    // toast error
    console.log(result?.error)
    toast.error('Something went wrong!')
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
         <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
         <div className="max-w-2xl mx-auto p-4 relative z-10">

         <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
          Contact Us
        </h1>

        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>




    <form
      onSubmit={handleSubmit(processForm)}
      className="space-y-4 mt-4"
    >
      <div>
        <input
          placeholder='name'
          className='rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700'
          {...register('name')}
        />
        {errors.name?.message && (
          <p className='ml-1 mt-1 text-sm text-red-400'>
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <input
          placeholder='email'
          className='rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700'
          {...register('email')}
        />
        {errors.email?.message && (
          <p className='ml-1 mt-1 text-sm text-red-400'>
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <input
          placeholder='number'
          className='rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700'
          {...register('number')}
        />
        {errors.number?.message && (
          <p className='ml-1 mt-1 text-sm text-red-400'>
            {errors.number.message}
          </p>
        )}
      </div>

      <div>
        <textarea
          rows={5}
          cols={5}
          placeholder='message'
          className='rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700'
          {...register('message')}
        />
        {errors.message?.message && (
          <p className='ml-1 text-sm text-red-400'>{errors.message.message}</p>
        )}
      </div>

      <button
        disabled={isSubmitting}
        className='px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2'
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
     
    </form>
    </div>
    </div>
    
  )
}