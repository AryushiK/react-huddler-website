import React from 'react';
import './privacypolicy.css';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function PrivacyPolicy() {
    return (
        <div className="privacy-policy-container">
            <h1 className="main-heading">Privacy Policy</h1>



            <p><strong>Effective Date:</strong> 7.7.25</p>
            <p>
                At Huddler, your privacy matters to us. This Privacy Policy outlines how we collect and use your information when you sign up for our waitlist.
            </p>

            <h2>What We Collect</h2>
            <p>When you join the waitlist, we collect only:</p>
            <ul>
                <li>Your name</li>
                <li>Your email address</li>
            </ul>
            <p>We do not collect any other personal information at this stage.</p>

            <h2>How We Use This Information</h2>
            <p>We use the data you provide for the following purposes:</p>
            <ul>
                <li>To reserve your spot on our waitlist</li>
                <li>To keep you informed about product updates, launch timelines, and early access opportunities</li>
                <li>To occasionally share news, insights, and announcements related to Huddler</li>
            </ul>
            <p>We do <strong>not</strong> sell or share your data with third parties for marketing or advertising purposes.</p>

            <h2>Data Security</h2>
            <p>
                We take reasonable and appropriate steps to protect your personal information from unauthorized access, misuse, or loss.
                Your data is stored securely and only accessible to authorized team members.
            </p>

            <h2>Your Rights</h2>
            <p>
                You can opt out of our communications at any time by contacting us directly at <a href="mailto:huddler@support.in">huddler@support.in</a>.
            </p>
            <p>
                Want your data deleted? Just let us know — we’ll remove it promptly.
            </p>

            <h2>Policy Updates</h2>
            <p>
                This policy may be updated from time to time. We’ll always post the latest version here and indicate the effective date.
                Continued use of our site or services after any updates constitutes your acceptance of the revised policy.
            </p>

            <h2>Contact</h2>
            <p>
                For questions or concerns about your data or privacy, contact us at: <a href="mailto:huddler@support.in">huddler@support.in</a>
            </p>

            <hr style={{ margin: '40px 0' }} />

            <h1 className="main-heading no-justify">Terms & Conditions – Huddler Waitlist</h1>

            <p><strong>Effective Date:</strong> 7.7.25</p>

            <h2>1. Purpose of the Waitlist</h2>
            <p>
                The waitlist is intended to provide early access and updates about Huddler’s upcoming product launch.
                Signing up does not guarantee access to our platform or any specific feature.
            </p>

            <h2>2. Eligibility</h2>
            <p>To join the waitlist, you must:</p>
            <ul>
                <li>Be at least 18 years old</li>
                <li>Provide accurate and valid name and email information</li>
                <li>Agree to receive communications from Huddler regarding the product</li>
            </ul>
            <p>
                We reserve the right to remove anyone from the waitlist at our discretion,
                including those who submit false or incomplete information.
            </p>

            <h2>3. No Guarantees</h2>
            <p>Joining the waitlist does not guarantee:</p>
            <ul>
                <li>Access to Huddler’s platform</li>
                <li>A specific launch date</li>
                <li>Placement priority unless explicitly offered</li>
            </ul>
            <p>
                Entry may be granted in phases, and Huddler retains the sole right to determine access timelines.
            </p>

            <h2>4. Communications & Opt-Out</h2>
            <p>By signing up, you agree to receive:</p>
            <ul>
                <li>Product updates</li>
                <li>Early access opportunities</li>
                <li>Feedback invitations</li>
            </ul>
            <p>
                You can opt out anytime by using the unsubscribe link in our emails or by
                contacting us at <a href="mailto:huddler@support.in">huddler@support.in</a>.
            </p>

            <h2>5. Data Use</h2>
            <p>
                We collect only your name and email for waitlist purposes. Your data is
                handled in accordance with our Privacy Policy, and will not be sold or shared
                without your consent.
            </p>

            <h2>6. Modifications</h2>
            <p>
                We may update these terms as needed. Updates will be posted on this page
                and take effect immediately. Continued participation implies acceptance of
                any revised terms.
            </p>

            <h2>7. Contact</h2>
            <p>
                Questions? Reach out to us at: <a href="mailto:huddler@support.in">huddler@support.in</a>
            </p>
        </div>

    );
}

export default PrivacyPolicy;
