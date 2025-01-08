import React from "react";
import {
  Field,
  Fieldset,
  Input,
  Label,
  Select,
  Button,
  Textarea,
} from "@headlessui/react";
import { GoChevronDown } from "react-icons/go";

import clsx from "clsx";
import Heading from "../../../components/shared/heading/Heading";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import toast from "react-hot-toast"
import useImageUpload from "../../../components/hooks/useImageUpload";


// 
const AddItems = () => {
  const [imageUploadToImagebb] = useImageUpload();
  const axiosSecure = useAxiosSecure();
  // 
  const { register, handleSubmit,formState: { errors }, } = useForm();
  // submit the data to db
  const onSubmit = async(formData) => {
      // image upload to imagebb and get the image link
       const imageFile = {image: formData?.image[0]}
        // 
          imageUploadToImagebb(imageFile)
          .then(async  data =>{
            //  when data is upload and we get a link from image bb
             if(data?.success){
              //payload
              const recepieData = {
                    name:formData?.name,
                    category:formData?.category,
                    price:parseFloat(formData?.price),
                    recipe:formData?.recipe,
                    image:data?.data?.display_url   
              }
              // 
             await axiosSecure.post('/menu',recepieData)
             toast.success(`${formData?.name} is added to the menu`)
  
         }

          })
   
  }
 






  //
  return (
    <div className="w-full px-4">
      <Heading subTitle={"---- Whats New ---"} title={"Add Your Dishes"} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Fieldset className="space-y-6 rounded-xl bg-black/5 p-6 sm:p-10">
          <Field>
            <Label className="text-sm/6 font-medium text-black">Name</Label>
            <Input
              required
              {...register("name")}
              className={clsx(
                "mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25"
              )}
            />
          </Field>
          <div className="flex justify-center items-center gap-6">
            <Field className="w-full">
              <Label className="text-sm/6 font-medium text-black">
                Recepie
              </Label>
              <div className="relative">
                <Select
                  defaultValue={'default'}
                  required
                  {...register("category")}
                  className={clsx(
                    "mt-3 block w-full appearance-none rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black",
                    "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25",
                    // Make the text of each option black on Windows
                    "*:text-black"
                  )}
                >
                  <option value='default'>
                    Selected a Category
                  </option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soups">Soups</option>
                  <option value="desserts">Desserts</option>
                  <option value="drinks">Drinks</option>
                </Select>
                <GoChevronDown
                  className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-black/60"
                  aria-hidden="true"
                />
              </div>
            </Field>

            <Field className="w-full">
              <Label className="text-sm/6 font-medium text-black">Price</Label>
              <Input
                required
                {...register("price")}
                type="number"
                className={clsx(
                  "mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black",
                  "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25"
                )}
              />
            </Field>
          </div>
          {/*  */}
          <Field>
            <Label className="text-sm/6 font-medium text-black">
              Description
            </Label>
            <Textarea
              required
              {...register("recipe")}
              className={clsx(
                "mt-3 block w-full resize-none rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25"
              )}
              rows={3}
            />
          </Field>
          {/*  */}
          <Field>
            <Label className="text-sm/6 font-medium text-black">Image</Label>
            <Input
              {...register("image")}
              type="file"
              className={clsx(
                "mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25"
              )}
            />
          </Field>
          {/*  */}
          <Button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-black/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-black"
          >
            Save changes
          </Button>
        </Fieldset>
      </form>
    </div>
  );
};

export default AddItems;
