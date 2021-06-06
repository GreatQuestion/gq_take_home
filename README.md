# Great Question Take Home Exercise

## The problem

Incentive Redeeming.

There are two roles when it comes to user research - the researcher and the candidate. 

As part of running interviews or surveys, a researcher will often offer an incentive to the candidate to participate.  This may be a gift card, a coupon code, money, or free product. 

For the purpose of this exercise, the researcher will only be issuing coupon codes to the candidate.

After the interview is complete, the researcher sends the candidate the incentive which they then redeem. 

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

## Out of scope

- authentication is not required.
- any excessive styling beyond making the app usable. 

## Additional

- some extend the test suite for your new functionality. 