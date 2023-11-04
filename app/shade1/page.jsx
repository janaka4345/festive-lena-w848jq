"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function CardWithForm() {
  const [formState, setFormState] = useState("200gb");

  const handleFormdara = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const payload = Object.fromEntries(formdata);
    // console.log(formdata.get("car"));
    console.log(payload);
  };
  return (
    <Card className="w-[700px]  bg-gray-200 mx-auto">
      <CardHeader>
        <div className="flex flex-row">
          <CardTitle className="w-1/2 ">
            Choose amount thats right for you
          </CardTitle>
          <div className="flex items-center space-x-2 ">
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
            <Switch id="airplane-mode" className="scale-50 " />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>
        </div>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent>
        <form onSubmit={handleFormdara} className="flex gap-4   flex-row   ">
          <div className="w-full">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                {/* <Label htmlFor="name">Name</Label> */}
                <Input
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  id="firstName"
                />
                <Input
                  placeholder="Email"
                  type="email"
                  name="email"
                  id="email"
                />
                <Input
                  placeholder="Password"
                  type="password"
                  name="password"
                  id="password"
                />
                <Input
                  placeholder="Card Number"
                  type="text"
                  name="cardNumber"
                  id=""
                />
              </div>
            </div>
            <Button type="submit" className="w-full mt-6">
              Deploy
            </Button>
          </div>
          <div className="w-full">
            <label htmlFor="200gb">
              <div className="bg-white border-2 w-full h-fit rounded-sm ">
                <h1 className="">
                  Essential {"200gb" === formState && <span>x</span>}
                </h1>
                <input
                  className="bg-red-500 hidden"
                  type="radio"
                  name="200gb"
                  id="200gb"
                  value="200gb"
                  onChange={() => setFormState("200gb")}
                />
                <p>
                  <span>200 GB</span> of storage
                </p>
              </div>
            </label>
            <label htmlFor="1gb">
              <div className="bg-white border-2 w-full h-fit rounded-sm ">
                <h1 className="">
                  Pro {"1gb" === formState && <span>x</span>}
                </h1>
                <input
                  className="bg-red-500 hidden "
                  type="radio"
                  name="200gb"
                  id="1gb"
                  value="1gb"
                  onChange={() => setFormState("1gb")}
                />
                <p>
                  <span>1 GB</span> of storage
                </p>
              </div>
            </label>
          </div>
        </form>
      </CardContent>
      {/* <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter> */}
    </Card>
  );
}
