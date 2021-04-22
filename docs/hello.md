---
slug: Payments
title: Gestopago API Payments
tags: [Payments, docusaurus]
---

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

## General context

For the use of this API it is necessary that the distributor is correctly registered in the MercadoPago Portal, having completed the following steps:

1. Distributor registration in the Gestopago platform.
1. Authorize Gestopago to operate on your behalf.
1. Renew credentials every 5 months provided by Gestopago.
1. Implement MercadoPago's web-checkout process in its web portal / app to tokenize the user's credit information. The result of this process is a 
 **token**  that must be sent to the PayTx.do method.

:::tip
**Please review the following link**: 
[checkout-api](https://www.mercadopago.com.mx/developers/es/guides/online-payments/checkout-api/receiving-payment-by-card/).
:::

## Public Key for tokenization process

Mercado Pago's tokenization process requires a Public Key which must be provided by Gestopago.

## Log evidence

It is the obligation of the implementer to save the requests and responses that are exchanged between Gestopago and the implementer server in some type of log. The log can be a file or database, but it is necessary to have the data that is sent and received for any type of revision or clarification.


## Timeout


Testing Card Info
It is the maximum waiting time that API requests should have. **Currently the value is 62 seconds**.


## Testing    

```jsx title="Testing Card Info"
    Number 5474 9254 3267 0366
    Card Mastercard
    CVV 123
    Expiration Date 11/25
```

```jsx title="For Test Installments"
    Number 4075 5957 1648 3764
    Card VISA
    CVV 123
    Expiration Date 11/25
```

## Important
  -  Request the value of the parameter channel to Gestopago.
  -  Request the Public Key for Sandbox to Gestopago.
     To test different payment results, complete the information you want in the name of the cardholder:
     
     | Code     |      Meaning                   | 
     | -------- | :-----------------------------:| 
     | APRO     | Payment approved               |
     | OTHE     | Rejected by general error.     |
     |CALL      | Rejected with validation to authorize.|
     |FUND      | Rejected for insufficient amount. |
     |SECU      | Rejected by invalid security code.| 
     |EXPI      | Rejected due to problem with expiration date.| 
