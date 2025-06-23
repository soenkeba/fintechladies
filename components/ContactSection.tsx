"use client";

export default function ContactSection() {
  return (
    <section
      className="section py-16 md:py-24 bg-cover bg-center relative"
      id="contact"
      style={{ backgroundImage: "url(/images/contact-bg.jpg)" }}
    >
      {" "}
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-montserrat font-bold text-center mb-8 text-white">
          Contact Us
        </h2>
        <div className="divider bg-mantis-white"></div>

        <p className="text-center text-white text-lg mb-8">
          Sign up for our newsletter to join our community.
          <br />
          Write a few lines about yourself and your motivation to join us!
        </p>

        <div className="max-w-4xl mx-auto">
          <form
            action="https://fintechladies.us15.list-manage.com/subscribe/post?u=cab12c369aa4c9086cc45aa85&id=55b34e8f8c"
            method="post"
            target="_blank"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white mb-2">First name:</label>
                <input
                  type="text"
                  name="VORNAME"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/90 text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-ftl-green"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Last name:</label>
                <input
                  type="text"
                  name="NACHNAME"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/90 text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-ftl-green"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white mb-2">Organisation:</label>
                <input
                  type="text"
                  name="FIRMA"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/90 text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-ftl-green"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Role:</label>
                <input
                  type="text"
                  name="MMERGE5"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/90 text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-ftl-green"
                />
              </div>
            </div>

            <div>
              <label className="block text-white mb-2">Email:</label>
              <input
                type="email"
                name="EMAIL"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/90 text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-ftl-green"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white mb-2">
                  Hubs I am interested in:
                </label>
                <div className="bg-white/90 rounded-lg p-4 space-y-2 max-h-48 overflow-y-auto">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="2"
                      name="group[531][2]"
                      className="mr-2"
                    />
                    <span className="text-gray-900">Berlin</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="4"
                      name="group[531][4]"
                      className="mr-2"
                    />
                    <span className="text-gray-900">Frankfurt</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="8"
                      name="group[531][8]"
                      className="mr-2"
                    />
                    <span className="text-gray-900">Hamburg</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="16"
                      name="group[531][16]"
                      className="mr-2"
                    />
                    <span className="text-gray-900">Munich</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="32"
                      name="group[531][32]"
                      className="mr-2"
                    />
                    <span className="text-gray-900">Vienna</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="64"
                      name="group[531][64]"
                      className="mr-2"
                    />
                    <span className="text-gray-900">Zurich/Zug/Geneva</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="128"
                      name="group[531][128]"
                      className="mr-2"
                    />
                    <span className="text-gray-900">Brussels</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="256"
                      name="group[531][256]"
                      className="mr-2"
                    />
                    <span className="text-gray-900">London</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="256"
                      name="group[531][256]"
                      className="mr-2"
                    />
                    <span className="text-gray-900">New York</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="512"
                      name="group[531][512]"
                      className="mr-2"
                    />
                    <span className="text-gray-900">Stockholm</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-white mb-2">Message:</label>
                <textarea
                  name="NACHRICHT"
                  rows={6}
                  maxLength={250}
                  className="w-full px-4 py-2 rounded-lg bg-white/90 text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-ftl-green resize-none"
                />
              </div>
            </div>

            <div className="text-white text-sm">
              <p>
                By hitting &quot;Send&quot; you confirm that you have read and
                agree to the terms of our{" "}
                <a
                  href="/privacy"
                  target="_blank"
                  className="underline hover:no-underline"
                >
                  Privacy Policy
                </a>
                .<br />
                We use Mailchimp as our marketing platform. By clicking below to
                subscribe, you acknowledge that your information will be
                transferred to Mailchimp for processing.{" "}
                <a
                  href="https://mailchimp.com/legal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline"
                >
                  Learn more about Mailchimp&apos;s privacy practices here.
                </a>
              </p>
            </div>

            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_cab12c369aa4c9086cc45aa85_55b34e8f8c"
                tabIndex={-1}
                value=""
                readOnly
              />
            </div>

            <div className="flex gap-4 justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-ftl-green text-white font-medium rounded-lg hover:bg-ftl-dark-green transition-colors"
              >
                Send
              </button>
              <button
                type="reset"
                className="px-8 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
