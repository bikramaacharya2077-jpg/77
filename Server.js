<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>77 - Global Betting Platform</title>
    <style>
        body { font-family: Arial, sans-serif; background-color: #121212; color: #fff; margin: 0; padding: 0; }
        header { background: #1f1f1f; padding: 15px; text-align: center; border-bottom: 2px solid #ffcc00; }
        .container { padding: 20px; max-width: 400px; margin: auto; }
        .card { background: #1e1e1e; padding: 15px; margin-bottom: 15px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.3); }
        .btn { background: #ffcc00; color: #000; border: none; padding: 10px; width: 100%; font-weight: bold; border-radius: 5px; cursor: pointer; }
        .btn:hover { background: #e6b800; }
        input { width: 100%; padding: 10px; margin: 8px 0; background: #2c2c2c; border: 1px solid #444; color: #fff; border-radius: 4px; box-sizing: border-box; }
    </style>
</head>
<body>
    <header>
        <h2>77 - Official App</h2>
    </header>
    <div class="container">
        <div class="card">
            <h3>Account Balance</h3>
            <p id="balance">$0.00 USD / NPR 0.00</p>
        </div>
        <div class="card">
            <h3>Quick Deposit</h3>
            <input type="number" id="amount" placeholder="Enter Amount">
            <button class="btn" onclick="depositFunds()">Deposit Now</button>
        </div>
    </div>
    <script>
        function depositFunds() {
            let amt = document.getElementById('amount').value;
            if(amt > 0) {
                alert("Redirecting to Secure International Gateway for " + amt);
            } else {
                alert("Please enter a valid amount.");
            }
        }
    </script>
</body>
const express = require('express');
const app = express();
app.use(express.json());

// यूजर वॉलेट और बैलेंस एपीआई
app.post('/api/wallet/deposit', (req, res) => {
    const { userId, amount, currency } = req.body;
    // यहाँ इंटरनेशनल पेमेंट गेटवे (जैसे Stripe, eSewa, Crypto) का लॉजिक जुड़ेगा
    res.json({ 
        status: "success", 
        message: `Successfully processed ${amount} ${currency} for User ${userId}` 
    });
});

app.listen(3000, () => {
    console.log('77 App Backend running on port 3000');
});

</html>
Aaja
