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

For the candidate, they can visit `/redeem` to redeem a coupon code after the research has been completed. They click ????


## Exercise

Right now the app only supports a single coupon code. We want to extend the app to support multiple coupon codes, each of which is unique.

- The researcher can visit `/setup` and add several coupon codes.
- The candidate can visit `/redeem` and issue a unique code every time they click Redeem. 
  - No idea what this means really, but taking a stab to start the conversation
- Once redeemed, a coupon code must be marked as redeemed so that it cannot be used again. 
- The researcher should be able to see which coupon codes have been redeemed, and add additional codes. 

Please fork this repository for your changes, and make clean git commits with your changes.

## How I am approaching the problem

A coupon code like `helloworld` is obfuscated into some unique code for each candidate, these are called `CandidateIncentive`s
CandidateIncentives can be redeemed from the `/redeem` endpoint

There would be another endpoint for deactivating or ending a campaign which would turn the `Incentive`s off or make them inactive

This seems to make sense in the context of a campaign, whereby there are multiple codes added in bulk to be given to a group of candidates (franchise).

These codes are then obfuscated and used for each candidate as a `CandidateIncentive` record and redeemed from there so the original code is not used.

This would be the same as having a redemptions table for the `Incentive` just named `CandidateIncentive`. The `redemptions#index` view contains the `codes` to be used by the candidate to be redeem and the `redemptions#show` view is the view to redeem the codes.

There are one million ways to implment this and although vague, it's a relatively good exercise. Hopefully this makes a bit of sense!

We could put the redeem functionality on the same page as the list view, but for simiplicity and times sake, it's moved to `/redeem/:code`

## Questions

- What are the researchers creating multiple coupon codes from? Thin air or pasting something in?
- Not sure why you would issue a unique code when you click redeem aside from a receipt or proof you did research in which why not just track the research being done and mark a boolean column complete or something?
- As far as redemptions go, supporting multiple redemptions per code makes more sense from a tracking perspective than a single redemption for a code.
  - It is possible to redeem the code on the Incentive record with a boolean redeemed column and return a randomly generated code, but the code would not be persisted and would not support multiple redemptions (may be outside the scope of the assignment)
  - We can fix this easily by adding a redeemed column to the `Incentive` and as mentioned return a generated string or persist the generated string on `Incentive`

## TODO's

- [ ] Modify ruby version back to 2.7.1


- [x] Receive codes params, iterate and create multiple Incentives
  - We do want to create multiple incentives here via comma separated list
- [x] Pass back securerandom.hex version of the code so people do not use the same code
  - This is going to come from the candidate incentive model instead of the incentive model so we can provide a consumable code to the candidate vs the original code that could be shared between people
- [x] Add redeemed boolean flag on the CandidateIncentive
  - Turns out we need to have a separate association for redeemable codes based on the initial code and to make them unique per candidate
- [x] Add an endpoint for the researcher to see a list of redeemed codes
  - Show the candidate_redemptions vs redemptions

  - [ ] Outline pros and cons of each implementation and cover most of the questions they will ask in a follow up including not following the strict directions

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
