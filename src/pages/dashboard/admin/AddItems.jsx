import React from "react";
import {
  Field,
  Fieldset,
  Input,
  Label,
  Select,
  Button,
  Description,
  Textarea,
} from "@headlessui/react";
import { GoChevronDown } from "react-icons/go";

import clsx from "clsx";
import Heading from "../../../components/shared/heading/Heading";
import { useForm } from "react-hook-form";

const AddItems = () => {
  const { register, handleSubmit,formState: { errors }, } = useForm();
  const onSubmit = (data) => console.log(data)

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
                  {...register("recepie")}
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
              {...register("description")}
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
