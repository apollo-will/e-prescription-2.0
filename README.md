# e-Prescription 2.0

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

e-Prescription 2.0 is a React application designed to streamline medicine services by connecting doctors, pharmacists, and patients in a seamless ecosystem. With e-Prescription 2.0, doctors can effortlessly create and send prescriptions to patients, pharmacists can efficiently process and fulfill these prescriptions, and patients can conveniently access and manage their medical information.

THIS REPOSITORY WAS FORKED FROM THE [ORIGINAL REPOSITORY](https://github.com/e-prescription-2-0/e-prescription-2.0) FOR DEMONSTRATION PURPOSES

## Setup
1. Install docker
2. Clone the repository with `git clone https://github.com/apollo-will/e-prescription-2.0.git`
3. Run `cd e-prescription-2.0`
4. Run `docker compose up`
5. Visit `localhost:9006` or feel free to change the allocated port in the docker-compose.yml file.

## Site Navigation
1. The site is in Bulgarian, therefore a translation extension is needed for the browser. For Google Chrome, TWP should already be installed but for Firefox users, I had to install the [extension](https://addons.mozilla.org/en-US/firefox/addon/traduzir-paginas-web/) myself.
2. Click the `Dashboard` menu button located after the `e-prescription` title.
3. Click the `Dashboard` menu button located on the sidebar.
4. Role specific actions follow.

### Credentials
Registering a new account would be difficult to navigate as the fields may not be automatically translated so listed below are the credentials I used for testing:

1. Patient:
  - test1234
  - test1234
2. Doctor
  - test12345
  - test12345
3. Pharmacist
  - test123456
  - test123456

If you wish to test the registration feature, inputting any string in the fields will return correct besides for one, which refers to an ID field. In this field, input a 10-digit number and this should work just fine.


### Download Prescription feature
This feature was implemented in a rush so it may not work for all cases.
1. Visit any prescription listed in the dashboard.
2. Click the `Download as PDF` text.