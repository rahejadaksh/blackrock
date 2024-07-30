from flask import Flask, jsonify, request
from recommendation import *
import json
# Import your existing functions

app = Flask(__name__)

@app.route('/recommendations', methods=['POST'])
def get_recommendations():
    data = request.json
    user_spending_data = data.get('user_spending_data', {})
    user_profile = data.get('user_profile', {})
    
    # Analyze user behavior
    user_behavior = analyze_user_behavior(user_spending_data, user_profile)
    
    # Stock tickers list
    stock_tickers = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'META', 'TSLA', 'NVDA', 'NFLX', 'ADBE', 'PYPL', 
                     'INTC', 'CSCO', 'PEP', 'KO', 'MCD', 'NKE', 'DIS', 'SBUX', 'PFE', 'JNJ',
                     'PG', 'HD', 'BAC', 'V', 'MA', 'COST', 'UNH', 'T', 'VZ', 'WMT', 
                     'BA', 'GE', 'GM', 'F', 'IBM', 'ORCL', 'CRM', 'UPS', 'FDX', 'RTX', 
                     'CVX', 'XOM', 'COP', 'PSX', 'MPC', 'VLO', 'BMY', 'MRK', 'LLY', 'ABT']
    
    # Fetch and analyze stock trends
    stock_scores = fetch_and_analyze_stocks(stock_tickers)
    
    # Sort stocks by recommendation score
    stock_scores.sort(key=lambda x: x['score'], reverse=True)
    
    # Recommend top 10 stocks
    top_10_stocks = stock_scores[:10]
    for stock in top_10_stocks:
        stock['recommendation'] = provide_recommendation(user_behavior, stock['analysis'], stock['score'])
        
    # Prepare result
    result = {
        'user_behavior': user_behavior,
        'top_10_stocks': top_10_stocks
    }
    
    # Convert result to JSON
    return jsonify(result)

if __name__ == "__main__":
    app.run(port=5000)
