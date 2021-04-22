---
title: Steps
---

## Review of tickets
All the tickets, should have at least the following data and should be provided to Gestopago to make a review and validation before of the deploy to production by the implementer.
- Logo of the implementer
- Name of the implementer
- Date of the transaction
- Authorization number (6 digits)
- Cellphone
- Amount
- Commission (if the implementer charged to the final user max is $5 MXN)
- Provided service
- Legend: "**No olvides conservar este comprobante de pago. Servicio provisto por GESTO PAGO DE SERVICIOS, S.A.P.I. DE C.V. (www.gestopago.com), Tel. (55) 90001758**"

### Example

![Docusaurus ticket](/img/ticket-example.png)

## Presentation of the application
You should provide a presentation step by step about this sections
- Installation of the application
- Onboarding of the application
- Registration of the application
- Process to make payment for Telcel postpago
- Available payment methods
- Options to check the ticket

## Certification with Gestopago
You should follow all the scenarios that we provided in [Gestopago Sandbox Telcel Postpago](https://docs.google.com/spreadsheets/d/1qtlc6xuD4TN77qBeYA8W0_VRLgXU5viL2_hljnPdwcQ/edit?usp=sharing) (Section Telcel postpago).


### VerifyReference
It is mandatory to verify the reference before to try a payment.

Below are some error and success codes that can be obtained when interacting with the Gestopago API (Telcel postpago).

| Code          |      Message                           | 
| ------------- | :-----------:                          |
| 01 | Success with debt balance(You should show to the final user the debt balance and the option for edit the balance).|
| 02 |Invalid Reference                                  |
| 03 |Reference associated with fraud                    |
| 04 |Service not available for verification             |
| 05 |Invalid reference length                           |
| 96 |Generic error (Telcel postpago)                    |
| 97 |Phone is with lawyers (Telcel postpago) if you have this response you should show to the final user this legend "Teléfono en Abogados, se debe de acudir a un centro de atención a clientes Telcel (CAC)"   |
| 98 |Telephone without payment responsibility (Telcel postpago)  if you have this response you should show to the final user this legend "Teléfono sin responsabilidad de pago, se debe acudir a un centro de atención a clientes Telcel (CAC)" |

### SendTx
- Success transactions
- Error transactions

### ConfirmTx
- Success confirmations
- Error confirmations


## Certification with Telcel

Once you have provided the tickets and the certification with Gestopago we can arrange a certification with Telcel where they will validate some scenarios commonly this scenarios. `(To make this test is mandatory to have Cellphones with postpago and debt balance)`.

### Total payment
1. Get the balance (ie. $270)
1. Pay the total balance (ie. $270)
1. Get de balance( (ie. $0 should be zero) 

### Partial payment
1. Get the balance (ie. $270)
1. Pay partial of the total balance (ie. $100)
1. Get de balance( (ie. $179) 
1. Pay partial of the total balance (ie. $170)
1. Get de balance( (ie. $0 should be zero) 


## Deploy to production
Once the implementer has the certification of Telcel we can arrange a date for production

