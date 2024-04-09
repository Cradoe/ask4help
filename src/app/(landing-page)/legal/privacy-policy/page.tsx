import { Footer } from "../../_components/footer";
import { Header } from "../../_components/header";
import { PageHeader } from "../_components/page-header";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <PageHeader
          title="Privacy policy"
          caption="Last updated February 28th, 2024"
        />

        <section className="my-10 w-1/3 mx-auto text-sm space-y-7 text-justify">
          <div className="space-y-4">
            <div className="text-secondary-600 font-semibold text-2xl">
              WHO WE ARE
            </div>
            <p>
              Ask4help, is registered under the ________________ and having its
              registered office at _____________________. OR, Kindly visit our
              website address at _____________________
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-secondary-600 font-semibold text-2xl">
              WHAT IS THIS PRIVACY POLICY FOR
            </div>
            <p>
              This Privacy Policy provides You a clear information on how
              users&apos; data is collected, processed, protected, and
              disseminated. This Privacy Policy shall be applicable to all Users
              using the Our Website/App/ Platform and equally applies to the
              data/information that is provided to Us in relation to the
              services provided.
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-secondary-600 font-semibold text-2xl">
              PERSONAL DATA WHICH IS COLLECTED
            </div>
            <p>
              We may collect and process the following categories of personal
              information:
            </p>
            <p>
              For record purposes, we may request for your name, email address,
              gender, date of birth, nationality, country of residence,
              education history, work experience etc. either at the time of
              registering with Our Website and/or while creating a user account.
            </p>
            <p>
              Log-in/Sign-in details and password details sign-in details and
              other information you provide when you create your personal
              account or fill in a registration form during the User account
              sign-in/registration/change password etc.
            </p>
            <p>
              All communications between You and us. When you send us an email,
              or chat with us online or via social media, we save your
              correspondence with us.
            </p>
            <p>
              Your data on social media (depending on your social network
              settings), we may receive information from your social network
              provider if you choose to you sign in for our services using a
              social network account.
            </p>
            <p>
              Information you choose/opt to share with us, e.g. when you leave a
              comment for us, fill out a survey, leave a review etc.
            </p>
            <p>
              Your IP address(es), browser and Operating System specifications
              including mobile browser and mobile operating systems.
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-secondary-600 font-semibold text-2xl">
              HOW WE COLLECT YOUR DATA
            </div>
            <p>
              Ask4hep obtains personal information in various ways. Examples
              include, when you visit our Website, register on our Website, or
              communicate with us via social media.
            </p>
            <p>
              We may also receive personal information from associated and/or
              other educational institutions, partners, or other service
              providers.
            </p>
            <p>
              We may likewise gather some information from your publicly
              available data, such as your Facebook or LinkedIn public profile.
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-secondary-600 font-semibold text-2xl">
              RIGHTS YOU HAVE OVER YOUR DATA
            </div>
            <p>
              If you create an account on our platform, or leave comments, you
              can request to receive a copy of your personal data we have
              collected, including any data you have provided to us. You can
              also request that we rectify or erase any personal data we have
              about you and/or restrict the processing of your personal data.
              However, this does not include any data we are required to retain
              for security, administrative or legal purposes.
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-secondary-600 font-semibold text-2xl">
              DISCLOSING YOUR DATA WITH THIRD PARTIES
            </div>
            <p>
              We reserve the right to release personal information without your
              consent or without consulting you, when we deem it necessary to
              comply with our legal obligations, to enforce our terms and
              conditions, to protect the security of this Website, or to prevent
              fraud.
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-secondary-600 font-semibold text-2xl"></div>
            <p></p>
          </div>
          <div className="space-y-4">
            <div className="text-secondary-600 font-semibold text-2xl"></div>
            <p></p>
          </div>
          <div className="space-y-4">
            <div className="text-secondary-600 font-semibold text-2xl"></div>
            <p></p>
          </div>
          <div className="space-y-4">
            <div className="text-secondary-600 font-semibold text-2xl"></div>
            <p></p>
          </div>
          <div className="space-y-4">
            <div className="text-secondary-600 font-semibold text-2xl"></div>
            <p></p>
          </div>
          <div className="space-y-4">
            <div className="text-secondary-600 font-semibold text-2xl"></div>
            <p></p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
