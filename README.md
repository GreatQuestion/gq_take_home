# Great Question Take Home Exercise

## The problem

Incentive Redeeming.

There are two roles when it comes to user research - the researcher and the candidate. 

As part of running interviews or surveys, a researcher will often offer an incentive to the candidate to participate.  This may be a gift card, a coupon code, money, or free product. 

For the purpose of this exercise, the researcher will only be issuing coupon codes to the candidate.

After the survey is complete, the researcher sends the candidate a link to the incentive, which they then redeem.

This is a basic application for managing that process.


## Current functionality

The app has two views - one for each role. 

For the researcher, they can visit `/setup` to add coupon codes for their research. Currently there is a single text field where the research can enter a code.

For the candidate, they can visit `/redeem` to redeem a coupon code after the research has been completed. They click 


## Exercise

Right now the app only supports a single coupon code. We want to extend the app to support multiple coupon codes, each of which is unique.

- The researcher can visit `/setup` and add several coupon codes.
- The candidate can visit `/redeem` and issue a unique code every time they click Redeem. 
- Once redeemed, a coupon code must be marked as redeemed so that it cannot be used again. 
- The researcher should be able to see which coupon codes have been redeemed, and add additional codes. 

Please fork this repository for your changes, and make clean git commits with your changes.


## Instructions

Prerequesites:
 - Ruby 2.7
 - Rails 6.0
 - Node.js 14+
 - Yarn (run `npm i -g yarn`)

[Tailwind.CSS](https://tailwindcss.com/docs) is included as a set of utility-based functional CSS classes. Working knowledge of Tailwind is a plus, but not required. For a brief overview, check out the classes you get out of the box for [font colors](https://tailwindcss.com/docs/text-color) and [padding](https://tailwindcss.com/docs/padding).

1. Clone the repo and run `bundle`
2. Run `bundle exec rails db:create db:migrate`
3. Run `yarn` to install the frontend dependencies
4. Run `bundle exec rails test` to ensure the unit tests are passing
5.  Run `bundle exec rails test:system` to ensure the system tests are passing
6. In two different terminal tabs/windows. run:
  1. `bundle exec rails s` to run the API
  2. `./bin/webpack-dev-server` to build the frontend app
7. Visit `http://localhost:3000` in your browser
8. Pages `/setup` and `/redeem` are implemented in `app/javascript/components/ResearcherApp` and `CandidateApp` respectively


## Out of scope

- Authentication is not required.
- Any excessive styling beyond making the app usable.
- Sophisticated error handling in the frontend app is not necessary.

## Testing

There are currently two areas tested - the controllers and basic system tests. It is expected that the test suite will be extended to support your new functionality. 
