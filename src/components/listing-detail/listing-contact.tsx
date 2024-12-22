import { Phone, Mail, MessageSquare } from 'lucide-react';

export default function ListingContact() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Contact Agent</h2>
      <div className="space-y-4">
        <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
          <Phone className="h-5 w-5" />
          <span>Call Agent</span>
        </button>
        <button className="w-full flex items-center justify-center gap-2 bg-white text-blue-600 border-2 border-blue-600 py-3 rounded-md hover:bg-blue-50">
          <Mail className="h-5 w-5" />
          <span>Email Agent</span>
        </button>
        <div className="border-t pt-4">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
            <button className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-md hover:bg-green-700">
              <MessageSquare className="h-5 w-5" />
              <span>Send Message</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
