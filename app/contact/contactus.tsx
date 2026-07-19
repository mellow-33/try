"use client"

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import contactPhoto from "../../images/contact.jpg";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <section className="w-full min-h-screen bg-[#FFFDF7] flex flex-col items-center p-4 md:p-8">
      {/* Contenitore Principale */}
      <div className="max-w-6xl w-full bg-white rounded-2xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-2">
        
        {/* Colonna Sinistra - Immagine */}
        <div className="relative min-h-75 lg:min-h-full">
          <Image 
            src={contactPhoto}
            alt="Modern building exterior" 
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
        </div>

        {/* Colonna Destra - Form */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-[#FFFDF7]">
          
          {/* Intestazione */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
            </p>
          </div>

          {/* Modulo di Contatto */}
          <form
            name="contact"
            method="POST"
            action="/contact/success"
            data-netlify="true"
            encType="multipart/form-data"
            className="space-y-6"
          >
            {/* Necessario per Netlify */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Riga 1: Nome ed Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* Nome */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-slate-900">
                  Name <span className="text-red-500">*</span>
                </Label>

                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="bg-white border-slate-200 focus-visible:ring-slate-900"
                />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-slate-900">
                     Email <span className="text-red-500">*</span>
                  </Label>

                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="bg-white border-slate-200 focus-visible:ring-slate-900"
                  />
                </div>

              </div>

              {/* Company */}
              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium text-slate-900">
                  Company
                </Label>

                <Input
                  id="company"
                  name="company"
                  placeholder="Your company"
                  className="bg-white border-slate-200 focus-visible:ring-slate-900"
                />
              </div>

              {/* Messaggio */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-slate-900">
                  Message
                </Label>

                <Textarea
                  id="message"
                  name="message"
                  placeholder="How can we help?"
                  className="min-h-30 resize-none bg-white border-slate-200 focus-visible:ring-slate-900"
                />
              </div>

              {/* Download documento */}
              <div className="space-y-3 rounded-lg border border-slate-200 bg-slate-50 p-5">

                <h3 className="font-medium text-slate-900">
                  Download the form
                </h3>

                <p className="text-sm text-slate-600">
                  Download the document, fill it out and upload it before submitting the request.
                </p>

                <Button variant="outline">
                  <a href="/documents/application-form.pdf" download>
                    Download Form
                  </a>
                </Button>
              </div>

              {/* Upload obbligatorio */}
              <div className="space-y-2">
                <Label
                  htmlFor="application"
                  className="text-sm font-medium text-slate-900"
                >
                  Upload completed form
                  <span className="text-red-500"> *</span>
                </Label>

                <Input
                  id="application"
                  name="application"
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  className="bg-white border-slate-200"
                />

                <p className="text-xs text-slate-500">
                  Accepted formats: PDF, DOC, DOCX
                </p>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full bg-[#1A1A1A] hover:bg-black text-white py-6 rounded-md font-medium text-base"
              >
                Submit Request
              </Button>
          </form>
        </div>
      </div>
      {/* INFO */}
      <div className="max-w-6xl w-full mt-8">
        <Card className="rounded-2xl border bg-[#FFFDF7] shadow-sm p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Orario Ufficio */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">
              Orario Uffico
            </h3>

            <div className="space-y-4 text-sm md:text-base">
              <div className="flex justify-between text-slate-600">
                <span>Luned&igrave; - Venerd&igrave;</span>
                <span>7:00 - 17:00 </span>
              </div>

              <div className="flex justify-between text-slate-600">
                <span>Domenica</span>
                <span>Disponibilità tramite accordo</span>
              </div>
            </div>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">
              Contatti
            </h3>

            <div className="space-y-4 text-sm md:text-base">

              <div className="flex justify-between">
                <span className="text-slate-600">Email</span>
                <span className="text-slate-700">
                  amm.thinkgreen@gmail.com
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-600">Phone</span>
                <span className="text-slate-700">
                  +111111111111111
                </span>
              </div>

              <div className="flex justify-between items-start gap-6">
                <span className="text-slate-600">Indirizzo</span>
                <span className="text-right text-slate-700">
                  Strada secondaria A5 <br />
                  Pontinia(LT) 04014
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </section>
    
  );
}