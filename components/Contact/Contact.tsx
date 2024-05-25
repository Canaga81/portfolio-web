"use client";

import React, { useState } from "react";
import { BsGithub, BsGoogle, BsLinkedin } from "react-icons/bs";

import { Terminal } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Contact = () => {

    const [emailSubmited, setEmailSubmited] = useState(false);

    const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        }

        const JsonData = JSON.stringify(data);
        const endpoint = "/api/send";

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JsonData,
        }

        const response = await fetch(endpoint, options);
        const resData = await response.json();

        if(response.status === 200) {
            console.log("Message Success");
            setEmailSubmited(true);
        }

    }

  return (

    <section id="contact">

      <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-5 mt-12 md:mt-24">

        <div className="col-span-1">

          <h5 className="text-mycolor-100 font-semibold mb-4 text-2xl">Lets Connect</h5>

          <p className="text-base text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            expedita voluptas mollitia inventore, dignissimos cumque vitae esse
            quod ducimus vel minima eaque! Fuga commodi similique expedita,
            tempore eaque rerum itaque culpa ad obcaecati nostrum quam explicabo
            modi ipsa cum minus, architecto repellat odio esse amet autem
            praesentium? Eius, id ad.
          </p>

          <div className="flex flex-row gap-4 mt-5">
            <BsGithub className="h-10 w-10 text-white" />
            <BsLinkedin className="h-10 w-10 text-white" />
            <BsGoogle className="h-10 w-10 text-white" />
          </div>

        </div>

        <div className="col-span-1">
            {
                emailSubmited ? (

                    <Alert className="bg-green-600 text-white">
                        <Terminal className="h-4 w-4" />
                        <AlertTitle>Heads up!</AlertTitle>
                        <AlertDescription>
                            You can add components to your app using the cli.
                        </AlertDescription>
                    </Alert>

                )
                : (

                    <form className="flex flex-col" onSubmit={handleSubmit}>

                        <div className="mb-6 text-white">
                            <Label htmlFor="terms">Your Email</Label>
                            <Input type="email" name="email" placeholder="Email" required
                            className="bg-mycolor-600 mt-2"
                            />
                        </div>

                        <div className="mb-6 text-white">
                            <Label htmlFor="terms">Subject</Label>
                            <Input type="text" name="subject" placeholder="Subject" required
                            className="bg-mycolor-600 mt-2"
                            />
                        </div>

                        <div className="mb-6 text-white">
                            <Label htmlFor="terms">Subject</Label>
                            <Textarea name="message" placeholder="Type your message here."
                            className="bg-mycolor-600 mt-2"
                            />
                        </div>

                        <Button type="submit">
                            Send Message
                        </Button>

                    </form>

                )

            }

        </div>

      </div>

    </section>

  );

};

export default Contact;