import { Dialog, Transition } from "@headlessui/react";
import type { Dispatch, SetStateAction } from "react";
import { Fragment } from "react";
import { IoIosClose } from "react-icons/io";

export default function ModalWaitlist({
  isOpen = true,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-2xl transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="absolute right-4 top-4">
                  <button onClick={() => setIsOpen(false)}>
                    <IoIosClose
                      size={52}
                      className="cursor-pointer transition-colors duration-300 hover:text-green-600"
                    />
                  </button>
                </div>
                <Dialog.Title
                  as="h2"
                  className="mb-8 px-2 pt-2 text-3xl font-bold leading-6 text-gray-900 md:px-8"
                >
                  Join the Waitlist
                </Dialog.Title>
                <div className="mt-2 w-full">
                  <form
                    action="https://getform.io/f/bc3bf6cc-40e4-4c5b-9ee3-76d35dbaab8b"
                    method="POST"
                    className="flex w-full flex-col gap-2 px-2 text-black md:px-8"
                  >
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
                      <div className="flex flex-col">
                        <label htmlFor="formName" className="">
                          First Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="formName"
                          className="border border-solid px-3 py-2"
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="formLastName">
                          Last Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          id="formLastName"
                          placeholder="Enter your last name"
                          className="border border-solid px-3 py-2"
                          required
                        />
                      </div>
                    </div>

                    <label htmlFor="formRoleTitle">
                      Role / Title <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="roleTitle"
                      id="formRoleTitle"
                      placeholder="Enter you role or title"
                      className="border border-solid px-3 py-2"
                      required
                    />
                    <label htmlFor="formPhone">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="formPhone"
                      placeholder="Enter your phone number"
                      className="border border-solid px-3 py-2"
                      required
                    />
                    <label htmlFor="formEmail">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="formEmail"
                      placeholder="Enter your email address"
                      className="border border-solid px-3 py-2"
                      required
                    />
                    <label htmlFor="formChurchName">
                      Church Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="churchName"
                      id="formEmail"
                      placeholder="Enter the name of your church"
                      className="border border-solid px-3 py-2"
                      required
                    />
                    <label htmlFor="formChurchAddress">
                      Church Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="churchAddress"
                      id="formChurchAddress"
                      placeholder="Enter the address of your church"
                      className="border border-solid px-3 py-2"
                      required
                    />
                    <label htmlFor="formCountry">
                      Country <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="country"
                      id="formCountry"
                      placeholder="Enter your country"
                      className="border border-solid px-3 py-2"
                      required
                    />
                    <label htmlFor="formCountry">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      id="formMessage"
                      placeholder="Write your message"
                      className="h-32 resize-none border border-solid px-3 py-3"
                      required
                    />
                    {/* <!-- add hidden Honeypot input to prevent spams --> */}
                    <input
                      type="hidden"
                      name="_gotcha"
                      style={{ display: "none" }}
                    />

                    <button
                      type="submit"
                      className="mb-4 mt-8 inline-flex justify-center border border-transparent bg-green-800 px-4 py-2 text-sm font-medium text-white hover:bg-green-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                    >
                      Submit
                    </button>
                    <p className="text-sm text-slate-500">
                      By clicking "submit" you consent to allow Church Chats to
                      store and process the personal information submitted above
                      and agree to our terms and conditions as well as our
                      Privacy Policy.
                    </p>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
