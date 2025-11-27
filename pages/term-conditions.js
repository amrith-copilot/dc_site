import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout/Layout';

const pageTerm = () => {
    const sections = [
        {
            id: 'privacy',
            title: 'Privacy Policy',
            content: (
                <>
                    <h4 className="color-brand-1 mb-20">Privacy Policy</h4>
                    <p className="font-md color-grey-500 mb-30">
                        <strong>Last updated:</strong> 26/04/2020<br /><br />

                        This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site.<br /><br />

                        We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.<br /><br />

                        <strong>Information Collection And Use</strong><br />

                        While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name ("Personal Information").<br /><br />

                        <strong>Log Data</strong><br />

                        Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data").<br /><br />

                        This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.<br /><br />

                        In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this …<br /><br />

                        <strong>Communications</strong><br />

                        We may use your Personal Information to contact you with newsletters, marketing or promotional materials and other information that ...<br /><br />

                        <strong>Cookies</strong><br />

                        Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive.<br /><br />

                        Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.<br /><br />

                        <strong>Security</strong><br />

                        The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.<br /><br />

                        <strong>Changes To This Privacy Policy</strong><br />

                        This Privacy Policy is effective as of 26/04/2020 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.<br /><br />

                        We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.<br /><br />

                        If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website.<br /><br />

                        <strong>Contact Us</strong><br />

                        If you have any questions about this Privacy Policy, please contact us.
                    </p>
                </>
            )
        },
        {
            id: 'gdpr',
            title: 'GDPR',
            content: (
                <>
                    <h4 className="color-brand-1 mb-20">GDPR</h4>
                    <p className="font-md color-grey-500 mb-30">
                        <strong>Data Processing Addendum</strong><br /><br />

                        This Data Processing Addendum (this “DPA”) is incorporated into the Terms of Service located at https://dataclap.co/GDPR (the “Agreement”) between the undersigned customer (“Customer”) and DataClap (the “Company”). Capitalized but undefined terms used in this DPA will have the meanings assigned to those terms in the Agreement. In the course of providing the Service to Customer pursuant to the Agreement, the Company may Process Personal Data on behalf of Customer. The Company agrees to comply with the following provisions with respect to its Processing of Customer Personal Data (as such term is defined herein).<br /><br />

                        <strong>1. DEFINITIONS</strong><br /><br />

                        <strong>“Affiliate”</strong> means any entity that directly or indirectly controls, is controlled by, or is under common control with the subject entity. “Control,” for purposes of this definition, means direct or indirect ownership or control of more than 50% of the voting interests of the subject entity.<br /><br />

                        <strong>“Controller”</strong> means the entity which determines the purposes and means of the Processing of Personal Data.<br /><br />

                        <strong>“Customer Data”</strong> means any data, information or material originated by Customer that Customer submits, collects or provides in the course of using the Services, including any Customer Personal Data.<br /><br />

                        <strong>“Customer Personal Data”</strong> means Personal Data submitted by or for Customer, or at Customer’s direction, to the Company in connection with Customer’s use of the Services, and to which Data Protection Laws apply.<br /><br />

                        <strong>“Data Protection Laws”</strong> means all laws and regulations, including laws and regulations of the European Union, the European Economic Area and their member states, and the United Kingdom, applicable to the Processing of Customer Personal Data by the Company under the Agreement.<br /><br />

                        <strong>“Data Subject”</strong> means an identified or identifiable natural person about whom the Company Processes Personal Data in connection with the Services.<br /><br />

                        <strong>“DPA Effective Date”</strong> means, as applicable, (a) 25 May 2018, if the parties agreed to this DPA prior to or on such date; or (b) the date on which the parties agreed to this DPA, if such date is after 25 May 2018. “GDPR” means the EU General Data Protection Regulation 2016/679.<br /><br />

                        <strong>“Personal Data”</strong> means any information which relates to an identified or identifiable natural person, and to which Data Protection Laws apply.<br /><br />

                        <strong>“Personal Data Breach”</strong> means a breach of the Company’s security leading to the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, Customer Personal Data in the Company’s possession, custody or control.<br /><br />

                        <strong>“Personal Data Breaches”</strong> will not include unsuccessful attempts or activities that do not compromise the security of Customer Personal Data, including unsuccessful log-in attempts, pings, port scans, denial of service attacks, and other network attacks on firewalls or networked systems.<br /><br />

                        <strong>“Process/Processing”</strong> shall have the same meaning as “processing” as defined in the GDPR. <strong>“Processor”</strong> means the entity which Processes Personal Data on behalf of the Controller.<br /><br />

                        <strong>“Security and Privacy Measures”</strong> appropriate technical and organizational measures to ensure a level of security appropriate to that risk, including, as appropriate, the measures referred to in Article 32(1) of the GDPR, that the Company generally makes available to its customers as updated from time to time, or otherwise made reasonably available by the Company.<br /><br />

                        <strong>“Standard Contractual Clauses”</strong> means the agreement executed by and between Customer and the Company and attached to this Addendum as Annex 2 pursuant to European Commission Decision of 5 February 2010 on standard contractual clauses for the transfer of personal data to processors established in third countries under Directive 95/46/EC of the European Parliament and of the Council.<br /><br />

                        <strong>“Sub-processor”</strong> means any entity that the Company engages to Process Customer’s Personal Data on behalf of the Company.<br /><br />

                        <strong>2. PROCESSING OF CUSTOMER PERSONAL DATA</strong><br /><br />

                        <strong>2.1 Roles of the Parties; Purpose.</strong> The parties acknowledge and agree that with regard to the Processing of Customer Personal Data, Customer is the Controller, the Company is a Processor and that the Company may engage Sub-processors pursuant to the requirements set forth herein. The subject matter and details of the processing are described in Annex 1.<br /><br />

                        <strong>2.2 Company’s Processing of Personal Data.</strong> The Company shall only Process Customer Personal Data on behalf of and in accordance with Customer’s instructions. Customer instructs the Company to Process Customer Personal Data for the following purposes: (i) Processing in accordance with the Agreement; (ii) Processing initiated by Users in their use of the Services; and (iii) Processing to comply with other reasonable instructions provided by Customer (e.g., via email) where such instructions are consistent with the terms of the Agreement and this DPA. This DPA and the Agreement are Customer’s complete and final instructions to the Company for the Processing of Customer Personal Data. Any additional or alternate instructions must be agreed upon separately in writing signed by authorized representatives of both parties.<br /><br />

                        <strong>2.3 Customer’s Processing of Personal Data.</strong> Customer shall, in its use of the Services, Process Customer Personal Data in accordance with the requirements of Data Protection Laws. Customer’s instructions for the Processing of Personal Data by the Company shall comply with all Data Protection Laws. Customer shall have sole responsibility for the accuracy, quality, and legality of Customer Personal Data and the means by which Customer acquired Personal Data.<br /><br />

                        <strong>2.4 Security of Processing.</strong> The Company will secure Customer Personal Data by implementing the Security and Privacy Measures. The Company will not materially decrease the overall security of the Services during the term of the Agreement.<br /><br />

                        <strong>2.5 Company’s Security Assistance.</strong> The Company will (taking into account the nature of the processing of Customer Personal Data and the information available to the Company) provide Customer with reasonable assistance necessary for Customer to comply with its obligations in respect of Customer Personal Data under Data Protection Laws, including Articles 32 to 34 (inclusive) of the GDPR, by (a) implementing the security measures in accordance with Section 2.4 (Security of Processing); and (b) complying with the terms of Section 2.8 (Personal Data Breach Notification).<br /><br />

                        <strong>2.6 Customer’s Security Responsibilities.</strong> Customer agrees that, without prejudice to the Company’s obligations under Section 4 (Company Personnel) and Section 2.8 (Personal Data Breach Notification), Customer is solely responsible for its use of the Services, including (a) making appropriate use of the Services to ensure a level of security appropriate to the risk in respect of the Customer Personal Data; (b) securing the account authentication credentials, systems and devices Customer uses to access the Services; and (c) backing up its Customer Personal Data. Customer agrees that, without prejudice to the Company’s obligations under Section 4 (Company Personnel) and Section 2.8 (Personal Data Breach Notification), the Company has no obligation to protect Customer Personal Data that Customer elects to store or transfer outside of the Company’s and its Sub-processors’ systems (for example, offline or on-premises storage).<br /><br />

                        <strong>2.7 Personal Data Breach Notification.</strong> The Company will notify Customer without undue delay after becoming aware of a Personal Data Breach. To the extent such Personal Data Breach is caused by a violation of the requirements of this DPA by the Company, the Company shall make reasonable efforts to identify and remediate the cause of such Personal Data Breach. Customer is solely responsible for complying with incident notification laws applicable to Customer and fulfilling any third-party notification obligations related to any Personal Data Breach. The Company’s notification of or response to a Personal Data Breach under this Section 2.8 will not be construed as an acknowledgement by the Company of any fault or liability with respect to the Personal Data Breach. To the extent that the Standard Contractual Clauses apply, Customer agrees that the provisions of this Section 2.8 satisfy the requirements of Clause 5(d)(2).<br /><br />

                        <strong>2.8 Impact Assessments and Consultations.</strong> The Company will (taking into account the nature of the processing and the information available to the Company) reasonably assist Customer in complying with its obligations under Data Protection Laws in respect of data protection impact assessments and prior consultation, including, if applicable, Customer’s obligations pursuant to Articles 35 and 36 of the GDPR, by (a) making available for review copies of the third-party certifications and audits set forth in the Security, Privacy and Architecture Documentation or other documentation describing relevant aspects of the Company’s information security program and the security measures applied in connection therewith; (b) providing the information contained in the Agreement, including this DPA, and (c) providing a description of the processing of Customer Personal Data undertaken by the Company.<br /><br />

                        <strong>2.9 Data Subject Rights.</strong> During the term of the Agreement, if the Company receives any request from a Data Subject in relation to Customer Personal Data, the Company will advise the Data Subject to submit their request to Customer and Customer will be responsible for responding to any such request. Upon request from Customer, the Company shall provide commercially reasonable assistance to Customer in relation to the handling of a Data Subject’s request for exercising the Data Subject’s rights laid down in Chapter III of the GDPR, taking into account the nature of the Company’s Processing of Customer Personal Data and solely to the extent Customer is unable to fulfill such requests through the Services. Customer shall be responsible for any costs arising from the Company’s provision of such assistance.<br /><br />

                        <strong>2.10 Deletion of Customer Personal Data.</strong> The Company shall delete all Customer Personal Data and copies thereof upon request of Customer or upon termination or expiration of the Agreement, unless otherwise required by the applicable Data Protection Laws, provided, however, that the Company shall delete backup data and operational or system log data in the ordinary course of business. In the event applicable law does not permit the Company to delete the Personal Data, the Company warrants that it shall ensure the confidentiality of the Personal Data and that it shall not use or disclose any Personal Data after termination of the Agreement, except as required by law.<br /><br />

                        <strong>2.11 Data Storage and Processing Facilities.</strong> The Company may, subject to Section 2.13 (Company’s Data Transfer Obligations), store and process Customer Personal Data anywhere the Company or its Sub-processors maintains facilities.<br /><br />

                        <strong>2.12 Data Transfers.</strong> With respect to Customer Personal Data transferred from the European Economic Area (“EEA”) to outside the EEA in conjunction with Customer’s use of the Services, either directly or via onward transfer, the Company will provide at least the same level of protection for such Customer Personal Data as is required by the Standard Contractual Clauses.<br /><br />

                        <strong>2.13 Audits.</strong> Company shall allow Customer and its respective auditors or authorized agents to conduct audits or inspections during the term of the Agreement, which shall include providing reasonable access to the premises, resources and personnel used by Company in connection with the provision of the Services and provide all reasonable assistance in order to assist Customer in exercising its audit rights under this section. The purposes of an audit pursuant to this section include to verify that Company is processing personal data in accordance with its obligations under the DPA and applicable Data Protection Laws. Notwithstanding the foregoing, such audit shall consist solely of: (i) the provision by Company of written information (including, without limitation, questionnaires and information about security policies) that may include information relating to subcontractors; and (ii) interviews with Company’s IT personnel. Such audit may be carried out by Customer or an inspection body composed of independent members and in possession of the required professional qualifications bound by a duty of confidentiality. For the avoidance of doubt no access to any part of Company’s IT system, data hosting sites or centers, or infrastructure will be permitted.<br /><br />

                        <strong>2.14 Processing Records.</strong> Customer acknowledges that the Company is required under the GDPR to: (a) collect and maintain records of certain information, including the name and contact details of each processor and/or controller on behalf of which the Company is acting and, where applicable, of such processor’s or controller's local representative and data protection officer; and (b) make such information available to the supervisory authorities. Accordingly, if the GDPR applies to the processing of Customer Personal Data, Customer will, where requested, provide such information to the Company, and will ensure that all information provided is kept accurate and up-to-date.<br /><br />

                        <strong>3. COMPANY PERSONNEL</strong><br /><br />

                        <strong>3.1 Confidentiality.</strong> The Company shall ensure that its personnel engaged in the Processing of Customer Personal Data are informed of the confidential nature of the Customer Personal Data, have received appropriate training on their responsibilities and have executed written confidentiality agreements or are under an appropriate statutory obligation of confidentiality. The Company shall ensure that such confidentiality obligations survive the termination of the personnel engagement.<br /><br />

                        <strong>3.2 Limitation of Access.</strong> The Company shall ensure that its personnel’s access to Customer Personal Data is limited to those personnel who require such access to perform under the Agreement.<br /><br />

                        <strong>4. SUB-PROCESSORS</strong><br /><br />

                        <strong>4.1 General Authorization.</strong> Customer authorizes the Company to subcontract processing of Customer Personal Data under this DPA to Sub-processors, provided that the Company: (a) provides Customer with such details about the Sub-processor(s) it uses as may be reasonably requested by Customer from time to time; (b) flows down its obligations under this DPA to such Sub-processor, such that the data processing requirements of such Sub-processor with respect to Customer Personal Data are no less onerous than the data processing requirements of the Company as set out in this DPA; and (c) will be fully liable to Customer for the performance of the Sub-processor’s obligations under this DPA if such Sub-processor fails to fulfill its data protection obligations. Information about Subprocessors, including their functions and locations, is available below: Paypal & Stripe: payment processing and billing Google Big Query: aggregates and records notification, engagement, and click count for all users Heroku & Amazon Web Services: used to host our web applications which include our databases<br /><br />

                        <strong>4.2 New Sub-Processors.</strong> The Company will inform Customer of any intended changes concerning the addition or replacement of Sub-processors. If Customer has a reasonable basis to object to the Company’s use of a new Sub-processor, Customer shall notify the Company promptly in writing within ten (10) days after the Company informs Customer of such change. If such objection is not unreasonable, the Company will use reasonable efforts to make available to Customer a change in the affected Services or recommend a commercially reasonable change to Customer’s configuration or use of the affected Services to avoid processing of Customer Personal Data by such new Sub-processor. If the Company is unable to make available such change within a reasonable period of time, which shall not exceed sixty (60) days, Customer may terminate the applicable portion of the Services that cannot be provided by the Company without the use of the objected-to new Sub-processor, by providing written notice to the Company. Customer shall receive a refund of any prepaid fees for the period following the effective date of termination in respect of such terminated Services.<br /><br />

                        <strong>4.3 Sub-Processor Agreements.</strong> The parties agree that if copies of the Sub-processor agreements must be sent by the Company to the Customer pursuant to this DPA or applicable Data Protection Laws, such copies may have all commercial information and clauses unrelated to this DPA removed by the Company beforehand; and, that such copies will be provided by the Company only upon reasonable request by Customer.<br /><br />

                        <strong>4.4 Customer Consent to Sub-processing; Access to Sub-processing Agreements.</strong> To the extent the Standard Contractual Clauses apply:<br /><br />

                        <strong>4.4.1</strong> Customer consents to the Company’s transfer of Personal Data to Sub-processors as described in Sections 4.1 and 4.2 above, and agrees that Customer’s consent satisfies the requirements of Clauses 5(h) and 11.1; and<br /><br />

                        <strong>4.4.2</strong> Upon Customer’s written request, the Company shall allow Customer to examine the data protection provisions of agreements between the Company and its subcontractors that access Customer Personal Data; provided that such agreements shall remain the Company’s Confidential Information. Customer agrees that this Section 4.4.2 satisfies the requirements of Clause 5(j) of the Standard Contractual Clauses.<br /><br />

                        <strong>5. GENERAL PROVISIONS</strong><br /><br />

                        <strong>5.1 Conflicting Terms.</strong> This DPA applies only between Customer and the Company and does not confer any rights to any third party. To the extent of any conflict or inconsistency between this DPA and the remaining terms of the Agreement, this DPA will govern. This DPA does not replace any additional rights related to the Company’s processing of Customer’s data as set forth in the Agreement.<br /><br />

                        <strong>5.2 Term and Termination.</strong> This DPA will become effective (a) 25 May 2018, if the parties agreed to this DPA prior to or on such date; or (b) the date on which the parties agreed to this DPA, if such date is after 25 May 2018. This DPA will terminate simultaneously and automatically upon the termination of the Agreement. The Company may terminate this DPA at any time upon notice to Customer if the Company offers alternative means to Customer that comply with all applicable Data Protection Laws. Customer may terminate this DPA at Customer’s discretion upon the Company’s receipt of Customer’s written notice of termination.<br /><br />

                        <strong>5.3 Liability.</strong> The total combined liability of either party and its Affiliates towards the other party and its Affiliates, whether in contract, tort or any other theory of liability, under or in connection with the Agreement, this DPA, combined will be limited to limitations on liability or other liability caps agreed to by the parties in the Agreement.<br /><br />

                        <strong>5.4 Governing Law.</strong> To the extent required by the applicable Data Protection Laws, this DPA shall be governed by the laws of the applicable jurisdiction. In all other cases, this DPA shall be governed by the laws of the jurisdiction stated in the Agreement.<br /><br />

                        <strong>Annex 1</strong><br /><br />

                        <strong>Subject Matter and Details of the Data Processing</strong><br /><br />

                        <strong>Subject Matter</strong> The Company’s provision of the Services to Customer.<br /><br />

                        <strong>Duration of the Processing</strong> Until deletion of all Customer Personal Data by the Company in accordance with the DPA.<br /><br />

                        <strong>Nature and Purpose of the Processing</strong> The Company will process Customer Personal Data for the purposes of providing the Services to Customer in accordance with the DPA and the Agreement.<br /><br />

                        <strong>Categories of Data</strong> Data relating to individuals provided to, or collected by, the Company in connection with the Services, by (or at the direction of) Customer.<br /><br />

                        <strong>Data Subjects</strong> Data subjects include the individuals about whom the Company Processes data in connection with the Services.<br /><br />

                        <strong>Annex 2</strong><br /><br />

                        <strong>STANDARD CONTRACTUAL CLAUSES (PROCESSORS)</strong><br /><br />

                        This Annex 2 is part 2 of 2 and must be accompanied by and signed with part 1 of 2 titled “Data Processing Addendum” to be valid.<br /><br />

                        For the purposes of Article 26(2) of Directive 95/46/EC for the transfer of personal data to processors established in third countries which do not ensure an adequate level of data protection<br /><br />

                        Name of the data exporting organization: [INSERT CUSTOMER NAME]<br /><br />

                        (the data exporter)<br /><br />

                        And<br /><br />

                        Name of the data importing organization: DataClap.<br /><br />

                        (the data importer)<br /><br />

                        each a ‘party’; together ‘the parties’, HAVE AGREED on the following Contractual Clauses (the Clauses) in order to adduce adequate safeguards with respect to the protection of privacy and fundamental rights and freedoms of individuals for the transfer by the data exporter to the data importer of the personal data specified in Appendix 1.<br /><br />

                        [The full Standard Contractual Clauses text follows as part of Annex 2. For brevity in the UI, the detailed clauses are included in the Agreement’s Annex 2 document and are available on request.]<br /><br />

                        <strong>Appendix 1</strong><br /><br />

                        <strong>to the Standard Contractual Clauses</strong><br /><br />

                        This Appendix forms part of the Clauses and must be completed and signed by the parties. The Member States may complete or specify, according to their national procedures, any additional necessary information to be contained in this Appendix.<br /><br />

                        <strong>Data exporter</strong><br /><br />

                        The data exporter is the Customer under the Agreement and obtains the Services in accordance with the terms of the Agreement. The data exporter submits Customer Data for use in the provision of the Services<br /><br />

                        <strong>Data importer</strong><br /><br />

                        The data importer is a legal entity that provides services through which data exporter can conduct marketing and related advertising activities on the Internet.<br /><br />

                        <strong>Data subjects</strong><br /><br />

                        The personal data transferred concern the following categories of data subjects:<br /><br />

                        ☒ Employees of the data exporter and any affiliate entities.<br /><br />
                        ☒ Customers of the data exporter and any affiliate entities.<br /><br />
                        ☒ Consumers<br /><br />

                        <strong>Categories of data</strong><br /><br />

                        The personal data transferred concern the following categories of data:<br /><br />

                        ☒ The personal data of data exporter’s and any affiliate entities’ employees generated in the normal course of business, including but not limited to: name and email address.<br /><br />
                        ☒ The personal data of data exporter’s and its affiliate entities’ customers generated in the normal course of business, including but not limited to: name and email address.<br /><br />
                        ☒ Browsing data<br /><br />

                        <strong>Special categories of data (if appropriate)</strong><br /><br />

                        None, other than to the extent incorporated into the categories of data set forth above, which will be determined solely by the employees, customers and consumers set forth above.<br /><br />

                        <strong>Processing operations</strong><br /><br />

                        The personal data transferred will be subject to the following basic processing activities:<br /><br />

                        Data Importer provides services through which Data Exporter provides services through which data exporter can conduct marketing and related advertising activities on the Internet.
                    </p>
                </>
            )
        },
        {
            id: 'delivery',
            title: 'Data Security',
            content: (
                <>
                    <h4 className="color-brand-1 mb-20">Data Security</h4>
                    <p className="font-md color-grey-500 mb-30">
                        <strong>Confidentiality and Non-Disclosure Agreements (NDAs)</strong><br /><br />

                        Our policies ensure confidentiality of client data at all times. A confidentiality agreement is executed with each client and all sensitive information is treated with strict care. We also require NDAs for employees and contractors assigned to client projects to protect client interests. Employees are prohibited from disclosing, copying, publishing, summarizing, or removing proprietary information outside the project team or company premises.<br /><br />

                        <strong>Employee background checks</strong><br /><br />

                        Thorough background checks (including criminal and identity verification where permitted) are conducted for all employees prior to onboarding. Data access is granted only to personnel who have passed these checks. Periodic re-screening and ongoing diligence are performed as appropriate.<br /><br />

                        <strong>Access control</strong><br /><br />

                        Physical access to production areas is restricted and monitored. Production environments are under continuous surveillance and access is limited to authorized personnel. Application and system access follow the principle of least privilege. Removable media (CDs, DVDs, USB drives, etc.) are prohibited in production areas without explicit authorization. Strong password policies and role-based access controls are enforced for internal systems.<br /><br />

                        <strong>Data Security</strong><br /><br />

                        Client data is transmitted and processed only over approved, secure channels. Data sharing is limited to authorized personnel and tracked for auditing and compliance. Local storage of sensitive client data is disallowed; data is stored centrally with appropriate controls. Regular audits and vulnerability assessments of storage and processing systems are conducted to maintain security.<br /><br />

                        <strong>Email Security</strong><br /><br />

                        Organizational email accounts are provisioned only when required. Outbound mail restrictions prevent sending from organizational accounts to unapproved external domains unless explicitly authorized. Email filtering, anti-phishing controls and encryption are applied as needed.<br /><br />

                        <strong>Internet access</strong><br /><br />

                        Internet access is restricted to business-necessary sites and continuously monitored. Web traffic is inspected and policy violations are subject to disciplinary action. Anti-spam, anti-virus and anti-malware protections are deployed and kept up to date. Network access is protected by authenticated logins, strong passwords and enterprise-grade firewalls to block unauthorized sites and services.<br /><br />

                        <strong>Awareness programs</strong><br /><br />

                        All employees receive security training on applicable policies and controls. Regular refresher trainings, security quizzes and awareness campaigns (classroom sessions, intranet updates, posters and mailers) are conducted to reinforce best practices and data protection obligations.<br /><br />

                        <strong>Tolerance policy</strong><br /><br />

                        DataClap enforces strict adherence to security policies. Violations are treated seriously and may result in disciplinary action, up to and including termination, to minimize impact to service delivery and client data protection.
                    </p>
                </>
            )
        }
    ];

    const [selected, setSelected] = React.useState(sections[0].id);

    const getSectionById = id => sections.find(s => s.id === id);

    return (
        <>
            <Head>
                <title>Terms and condition</title>
            </Head>

            <Layout>
                <div className="section pt-40 content-term">
                    <div className="box-bg-term" />
                    <div className="container">
                        <div className="breadcrumbs">
                            <ul>
                                <li> <Link href="#">
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>Home</Link></li>
                                <li> <Link href="term-conditions">Terms and condition</Link></li>
                            </ul>
                        </div>

                        <div className="content-main mt-50">
                            <div className="text-center">
                                <h2 className="color-brand-1 mb-10">Terms and Condition</h2>
                                <p className="font-lg color-grey-500">Amet nulla facilisi morbi tempus iaculis urna</p>
                            </div>

                            <div className="row mt-70">
                                <div className="col-lg-1 col-md-1" />

                                {/* Right column: icons navigation */}
                                <div className="col-lg-3 col-md-4">
                                    <h5 className="color-brand-1 mb-15">Table of Contents</h5>
                                    <div className="icon-nav" role="tablist" aria-orientation="vertical">
                                        {sections.map(sec => (
                                            <button
                                                key={sec.id}
                                                className={`nav-icon ${selected === sec.id ? 'active' : ''}`}
                                                onClick={() => setSelected(sec.id)}
                                                onTouchStart={() => setSelected(sec.id)}
                                                aria-controls={`panel-${sec.id}`}
                                                aria-selected={selected === sec.id}
                                                title={sec.title}
                                            >
                                                
                                                <span className="icon-letter">{sections.indexOf(sec) + 1}</span>
                                                <span className="icon-label">{sec.title}</span>
                                            </button>
                                            ))}
                                    </div>
                                </div>

                            {/* Left column: content panel */}
                                <div className="col-lg-8 col-md-7">
                                    <div className="panel-wrap" aria-live="polite">
                                        {/* render selected section; key causes mount animation */}
                                        <div key={selected} id={`panel-${selected}`} className="content-panel">
                                            {getSectionById(selected).content}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .icon-nav {
                        display: flex;
                        flex-direction: column;
                        gap: 0;
                        background: transparent;
                        padding: 0;
                        border-radius: 0;
                        box-shadow: none;
                        position: relative;
                    }
                    /* moved line to align with larger icons */
                    .icon-nav::before {
                        content: '';
                        position: absolute;
                        left: 26px;
                        top: 0;
                        bottom: 0;
                        width: 2px;
                        background: #e5e7eb;
                        z-index: 0;
                    }
                    .nav-icon {
                        display: flex;
                        align-items: center;
                        gap: 20px;
                        background: transparent;
                        border: none;
                        cursor: pointer;
                        padding: 16px 0;
                        border-radius: 0;
                        transition: all 0.2s ease;
                        color: #6b7280;
                        text-align: left;
                        position: relative;
                        z-index: 1;
                    }
                    .nav-icon:hover {
                        color: #374151;
                    }
                    .nav-icon:hover .icon-letter {
                        transform: scale(1.05);
                    }
                    .nav-icon:active { 
                        transform: scale(0.98);
                    }
                    .nav-icon .icon-letter{
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        background: #ffffff;
                        color: #9ca3af;
                        font-weight: 700;
                        font-size: 16px;
                        border: 2px solid #e5e7eb;
                        transition: all 0.3s ease;
                        flex-shrink: 0;
                        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
                    }
                    .nav-icon .icon-label{
                        display: none;
                        font-weight: 600;
                        font-size: 16px;
                        line-height: 1.4;
                        transition: color 0.2s ease;
                    }
                    /* show label on larger viewports */
                    @media(min-width:700px){
                        .nav-icon .icon-label{ 
                            display: inline-block;
                        }
                    }
                    .nav-icon.active {
                        color: #1f2937;
                    }
                    .nav-icon.active .icon-letter{
                        background: #2563eb;
                        color: #ffffff;
                        border-color: #2563eb;
                        box-shadow: 0 6px 18px rgba(37, 99, 235, 0.28);
                        transform: scale(1.08);
                    }
                    .nav-icon.active .icon-label{
                        color: #1f2937;
                        font-weight: 700;
                    }
                    .panel-wrap{ 
                        min-height: 420px; 
                        position: relative; 
                    }
                    .content-panel{
                        background: white;
                        padding: 36px 32px;
                        border-radius: 16px;
                        box-shadow: 0 10px 40px rgba(15, 23, 42, 0.08);
                        border: 1px solid rgba(15, 23, 42, 0.05);
                        animation: fadeInSlide 500ms cubic-bezier(0.4, 0, 0.2, 1);
                    }
                    @keyframes fadeInSlide {
                        from { 
                            opacity: 0; 
                            transform: translateY(12px);
                        }
                        to { 
                            opacity: 1; 
                            transform: translateY(0);
                        }
                    }

                    /* small niceties */
                    .font-sm{ font-size: 13px; }
                `}</style>
            </Layout>
        </>
    );
};

export default pageTerm;