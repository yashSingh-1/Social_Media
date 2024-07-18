import React from 'react'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"

const CustomInput = ({control, title, name, placeholder}: {
    control : any,
    title: string,
    name: string,
    placeholder: string
}) => {
  return (
    <div className='text-white'>
        <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem className='min-w-[350px] max-w-[400px] m-2 mt-2'>
              <FormLabel>{title}</FormLabel>
              <FormControl>
                <Input placeholder={placeholder} {...field}  className='text-black'/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
    </div>
  )
}

export default CustomInput