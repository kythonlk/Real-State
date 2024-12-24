import React from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "First-time Buyer",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
              text: "Found my dream home through DreamHome. The process was smooth and the team was incredibly helpful."
            },
            {
              name: "Michael Chen",
              role: "Property Investor",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
              text: "Outstanding service! Their market knowledge and professional guidance made investing easy."
            },
            {
              name: "Emily Davis",
              role: "Home Seller",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
              text: "Sold my property faster than expected and at a great price. Highly recommend their services!"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  width={100}
                  height={100}
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
