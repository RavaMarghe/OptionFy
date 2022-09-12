import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import ContactUs from "../footer/ContactUs";

export default function Disclaimer() {
  return (
    <div>
      <Header />
      <div className="bg-gradient-to-b from-violet-900 to-purple-900 text-white pt-5">
        <div className=" px-16 lg:px-32">
          <div>
            <h1 className=" h1Size">Disclaimer</h1>
            <p>Last updated: February 15, 2022</p>
            <br />
            <h1 className=" h1Size">
              Disclaimer Interpretation and Definitions
            </h1>
            <br />
            <div>
              <h1 className=" h1Size">Interpretation</h1>
              <p className="    ">
                The words of which the initial letter is capitalized have
                meanings defined under the following conditions. The following
                definitions shall have the same meaning regardless of whether
                they appear in singular or in plural.
              </p>
            </div>
            <br />
            <div>
              <h1 className="     h1Size">Definitions</h1>
              <p className=" ">For the purposes of this Disclaimer:</p>
              <div className=" ml-8">
                <li>
                  Company (referred to as either "the Company", "We", "Us" or
                  "Our" in this Disclaimer) refers to Optionsfy LLC, 7901 4th St
                  N, STE 300 St. Petersburg , FL 33702.
                </li>
                <li>Service refers to the Website.</li>
                <li>
                  You means the individual accessing the Service, or the
                  company, or other legal entity on behalf of which such
                  individual is accessing or using the Service, as applicable.
                </li>
                <li>
                  Website refers to Optionsfy, accessible from
                  https://www.optionsfy.com/
                </li>
              </div>
            </div>
            <br />
            <div>
              <h1 className="     h1Size">Disclaimer</h1>
              <p className="    ">
                The information contained on the Service is for general
                information purposes only. The Company assumes no responsibility
                for errors or omissions in the contents of the Service. In no
                event shall the Company be liable for any special, direct,
                indirect, consequential, or incidental damages or any damages
                whatsoever, whether in an action of contract, negligence or
                other tort, arising out of or in connection with the use of the
                Service or the contents of the Service. The Company reserves the
                right to make additions, deletions, or modifications to the
                contents on the Service at any time without prior notice. The
                Company does not warrant that the Service is free of viruses or
                other harmful components.
              </p>
            </div>
            <br />
            <div>
              <h1 className="     h1Size">External Links Disclaimer</h1>
              <p className="    ">
                The Service may contain links to external websites that are not
                provided or maintained by or in any way affiliated with the
                Company. Please note that the Company does not guarantee the
                accuracy, relevance, timeliness, or completeness of any
                information on these external websites.
              </p>
            </div>
            <br />
            <div>
              <h1 className="     h1Size">Errors and Omissions Disclaimer</h1>
              <p className="    ">
                The information given by the Service is for general guidance on
                matters of interest only. Even if the Company takes every
                precaution to insure that the content of the Service is both
                current and accurate, errors can occur. Plus, given the changing
                nature of laws, rules and regulations, there may be delays,
                omissions or inaccuracies in the information contained on the
                Service. The Company is not responsible for any errors or
                omissions, or for the results obtained from the use of this
                information.
              </p>
            </div>
            <br />
            <div>
              <h1 className="     h1Size">Fair Use Disclaimer</h1>
              <p className="    ">
                The Company may use copyrighted material which has not always
                been specifically authorized by the copyright owner. The Company
                is making such material available for criticism, comment, news
                reporting, teaching, scholarship, or research. The Company
                believes this constitutes a "fair use" of any such copyrighted
                material as provided for in section 107 of the United States
                Copyright law. If You wish to use copyrighted material from the
                Service for your own purposes that go beyond fair use, You must
                obtain permission from the copyright owner.
              </p>
            </div>
            <br />
            <div>
              <h1 className="     h1Size">Views Expressed Disclaimer</h1>
              <p className="    ">
                The Service may contain views and opinions which are those of
                the authors and do not necessarily reflect the official policy
                or position of any other author, agency, organization, employer
                or company, including the Company. Comments published by users
                are their sole responsibility and the users will take full
                responsibility, liability and blame for any libel or litigation
                that results from something written in or as a direct result of
                something written in a comment. The Company is not liable for
                any comment published by users and reserves the right to delete
                any comment for any reason whatsoever.
              </p>
            </div>
            <br />
            <div>
              <h1 className="     h1Size">No Responsibility Disclaimer</h1>
              <p className="    ">
                The information on the Service is provided with the
                understanding that the Company is not herein engaged in
                rendering legal, accounting, tax, or other professional advice
                and services. As such, it should not be used as a substitute for
                consultation with professional accounting, tax, legal or other
                competent advisers. In no event shall the Company or its
                suppliers be liable for any special, incidental, indirect, or
                consequential damages whatsoever arising out of or in connection
                with your access or use or inability to access or use the
                Service.
              </p>
            </div>
            <br />
            <div>
              <h1 className="     h1Size">"Use at Your Own Risk" Disclaimer</h1>
              <p className="    ">
                All information in the Service is provided "as is", with no
                guarantee of completeness, accuracy, timeliness or of the
                results obtained from the use of this information, and without
                warranty of any kind, express or implied, including, but not
                limited to warranties of performance, merchantability and
                fitness for a particular purpose. The Company will not be liable
                to You or anyone else for any decision made or action taken in
                reliance on the information given by the Service or for any
                consequential, special or similar damages, even if advised of
                the possibility of such damages.
              </p>
            </div>
            <br />
            <div>
              <h1 className="h1Size">Contact Us</h1>
              <p>
                If you have any questions about this Disclaimer, You can contact
                Us:
              </p>
              <div className="ml-8">
                <li>By email: support@optionsfy.com</li>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <ContactUs />
    </div>
  );
}
