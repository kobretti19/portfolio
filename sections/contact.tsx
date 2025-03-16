import ContactCard from "@/components/cards/contact";
import Heading from "@/components/heading/heading";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import SelectInput from "@/components/ui/select-input";
import TextArea from "@/components/ui/text-area";
import { FormEvent, useRef, useState } from "react";
import { FaPhoneVolume, FaProjectDiagram, FaUser } from "react-icons/fa";
import { MdEmail, MdSubject } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null!);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [services, setServices] = useState<string[]>([]);
  const [budgets, setBudgets] = useState<string[]>([]);

  console.log(budgets, "budgets");

  const sendEmail = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4qb42if",
        "template_35asr2u",
        formRef.current,
        "CoUydTUxW_5vOF378"
      )
      .then(
        (res) => {
          console.log(res.text);
          console.log("Email sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="pt-24 px-3 lg:px-8">
      <Heading number="03" title_1="Contact" title_2="Me" />
      <Card>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
          {/* Contact Cards */}

          <div className="flex flex-col gap-8">
            <div onClick={() => (window.location.href = "tel:+41786314202")}>
              <ContactCard
                title="Call us directly at"
                icon={<FaPhoneVolume className="fill-[#333] text-lg" />}
                text="+41 78 631 42 02"
                btnText="Call Us"
              />
            </div>

            <div
              onClick={() =>
                (window.location.href = "mailto:martinpetroski@gmail.com")
              }
            >
              <ContactCard
                title="Chat with us"
                icon={<MdEmail className="fill-[#333] text-lg" />}
                text="martinpetroski@gmail.com"
                btnText="Email Us"
              />
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="lg:col-span-2 bg-secondary-background border border-border rounded-lg space-y-6 relative overflow-hidden py-5 px-[25px] shadow-md"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between mb-4 gap-8">
              <Input
                name="name"
                type="text"
                placeholder="Full Name"
                icon={<FaUser />}
              />
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                icon={<MdEmail />}
              />
            </div>
            <div className="flex items-center justify-between mb-4 gap-8">
              <Input
                name="subject"
                type="text"
                placeholder="Subject"
                icon={<MdSubject />}
              />
            </div>

            {/* Multiple Select Wrapper - Services */}
            <div className="flex flex-col gap-6">
              <h1 className="font-bold text-lg">What services do you need?</h1>
              <div className="flex flex-wrap items-center justify-between mb-4 gap-8">
                {servicesOptions.map((service) => (
                  <SelectInput
                    key={service.id}
                    type="checkbox"
                    id={service.id}
                    text={service.text}
                    selectedOptions={services}
                    setSelectedOption={setServices}
                    allowMultiple
                  />
                ))}
              </div>
            </div>

            {/* Multiple Select Wrapper - Budget */}
            <div className="flex flex-col gap-6">
              <h1 className="font-bold text-lg">What is your budget?</h1>
              <div className="flex flex-wrap items-center justify-between mb-4 gap-8">
                {budgetOptions.map((budget) => (
                  <SelectInput
                    key={budget.id}
                    type="radio"
                    id={budget.id}
                    text={budget.text}
                    selectedOptions={budgets}
                    setSelectedOption={setBudgets}
                  />
                ))}
              </div>
            </div>

            {/* Message TextArea */}
            <TextArea
              name="message"
              placeholder="Tell us about your project"
              icon={<FaProjectDiagram />}
            />

            <div className="w-full flex justify-end">
              <div onClick={() => btnRef.current?.click()}>
                <Button className="!w-44 !py-3 !text-xl">
                  Send <SiMinutemailer />
                </Button>
              </div>

              {/* Hidden Inputs for Form Submission */}
              <div className="hidden">
                <input
                  type="text"
                  value={services.join(", ")}
                  name="services"
                  readOnly
                />
                <input
                  type="text"
                  value={budgets.join(", ")}
                  name="budgets"
                  readOnly
                />
              </div>

              <button ref={btnRef} hidden type="submit"></button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
}

// Options for services and budgets
const servicesOptions = [
  { id: "Web Design", text: "Web Design" },
  { id: "Web Development", text: "Web Development" },
  { id: "Full Website", text: "Full Website" },
];

const budgetOptions = [
  { id: "less than 500$", text: "< $500" },
  { id: "between 500$ and 2000$", text: "$500 - $2000" },
  { id: "between 2000$ and 5000$", text: "$2000 - $5000" },
  { id: "more than 5000$", text: "> $5000" },
];
