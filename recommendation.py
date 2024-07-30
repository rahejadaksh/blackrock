import numpy as np
import pandas as pd
import yfinance as yf
from typing import Dict, Any, List
import json

def analyze_user_behavior(spending_data: Dict[str, float], user_profile: Dict[str, Any]) -> Dict[str, Any]:
    monthly_income = spending_data['monthly_income']
    monthly_expense = spending_data['monthly_expense']
    savings_rate = (monthly_income - monthly_expense) / monthly_income
    risk_tolerance = 'high' if savings_rate > 0.2 else 'low'
    
    # Include additional user behavior metrics
    investment_horizon = user_profile['investment_horizon']
    financial_goals = user_profile['financial_goals']
    past_investment_experience = user_profile['past_investment_experience']
    
    behavior_analysis = {
        'savings_rate': savings_rate,
        'risk_tolerance': risk_tolerance,
        'investment_horizon': investment_horizon,
        'financial_goals': financial_goals,
        'past_investment_experience': past_investment_experience
    }
    
    return behavior_analysis

def analyze_stock_trend(ticker: str) -> Dict[str, Any]:
    stock = yf.Ticker(ticker)
    hist = stock.history(period="5y")
    
    if hist.empty:
        return None  # Return None if no data is found
    
    # Calculate technical indicators
    hist['MA50'] = hist['Close'].rolling(window=50).mean()
    hist['MA200'] = hist['Close'].rolling(window=200).mean()
    hist['Volatility'] = hist['Close'].rolling(window=30).std()
    
    # Basic trend analysis
    current_price = hist['Close'].iloc[-1]
    ma50 = hist['MA50'].iloc[-1]
    ma200 = hist['MA200'].iloc[-1]
    volatility = hist['Volatility'].iloc[-1]
    
    trend = 'positive' if ma50 > ma200 else 'negative'
    
    # Fetching some fundamental data
    info = stock.info
    full_name = info.get('longName', ticker)
    pe_ratio = info.get('trailingPE', None)
    eps = info.get('trailingEps', None)
    revenue_growth = info.get('revenueGrowth', None)
    dividend_yield = info.get('dividendYield', None)
    debt_to_equity = info.get('debtToEquity', None)
    
    return {
        'ticker': ticker,
        'name': full_name,
        'current_price': current_price,
        'ma50': ma50,
        'ma200': ma200,
        'volatility': volatility,
        'trend': trend,
        'pe_ratio': pe_ratio,
        'eps': eps,
        'revenue_growth': revenue_growth,
        'dividend_yield': dividend_yield,
        'debt_to_equity': debt_to_equity
    }

def get_esg_score(ticker: str) -> Dict[str, Any]:
    # Placeholder function for getting ESG score from a different provider
    # Replace with actual API call to ESG data provider
    return {
        'environmental': np.random.uniform(0, 100),
        'social': np.random.uniform(0, 100),
        'governance': np.random.uniform(0, 100),
        'overall': np.random.uniform(0, 100)
    }

def generate_score(stock_analysis: Dict[str, Any]) -> float:
    score = 0
    
    if stock_analysis['trend'] == 'positive':
        score += 20
    if stock_analysis['pe_ratio'] and stock_analysis['pe_ratio'] < 20:
        score += 20
    if stock_analysis['eps'] and stock_analysis['eps'] > 0:
        score += 20
    if stock_analysis['revenue_growth'] and stock_analysis['revenue_growth'] > 0:
        score += 20
    if stock_analysis['dividend_yield'] and stock_analysis['dividend_yield'] > 0:
        score += 10
    if stock_analysis['debt_to_equity'] and stock_analysis['debt_to_equity'] < 1:
        score += 10
    
    # Adjust score based on volatility
    if stock_analysis['volatility']:
        if stock_analysis['volatility'] < 2:
            score += 20
        elif stock_analysis['volatility'] < 5:
            score += 10
        else:
            score -= 10

    # Adjust score based on ESG score
    if stock_analysis['esg_score']['overall']:
        if stock_analysis['esg_score']['overall'] > 70:
            score += 20
        elif stock_analysis['esg_score']['overall'] > 50:
            score += 10
        else:
            score -= 10
    
    return score

def provide_recommendation(user_behavior: Dict[str, Any], stock_analysis: Dict[str, Any], score: float) -> str:
    recommendation = ""
    
    if user_behavior['risk_tolerance'] == 'low' and score > 50:
        recommendation = "Invest conservatively in this stock."
    elif user_behavior['risk_tolerance'] == 'high' and score > 50:
        recommendation = "You can invest more aggressively in this stock."
    else:
        recommendation = "It might be risky to invest in this stock at the moment."
    
    # Additional considerations based on user behavior
    if user_behavior['investment_horizon'] == 'short':
        recommendation += " Consider a short-term investment strategy."
    elif user_behavior['investment_horizon'] == 'long':
        recommendation += " Consider a long-term investment strategy."
    
    if user_behavior['financial_goals'] == 'income':
        recommendation += " Focus on stocks with good dividend yields."
    elif user_behavior['financial_goals'] == 'growth':
        recommendation += " Focus on growth stocks with potential for appreciation."
    
    if user_behavior['past_investment_experience'] == 'novice':
        recommendation += " Start with a smaller investment and gradually increase as you gain experience."
    elif user_behavior['past_investment_experience'] == 'experienced':
        recommendation += " You may consider more aggressive investment strategies based on your experience."
    
    return recommendation

def fetch_and_analyze_stocks(tickers: List[str]) -> List[Dict[str, Any]]:
    stock_scores = []
    
    for ticker in tickers:
        stock_analysis = analyze_stock_trend(ticker)
        if stock_analysis is None:
            continue
        stock_analysis['esg_score'] = get_esg_score(ticker)
        score = generate_score(stock_analysis)
        stock_scores.append({
            'ticker': ticker,
            'name': stock_analysis['name'],
            'score': score,
            'analysis': stock_analysis
        })
    
    return stock_scores

def main():
    # Example user data
    user_spending_data = {
        'monthly_income': 5000,
        'monthly_expense': 3000
    }
    
    # Example user profile
    user_profile = {
        'investment_horizon': 'long',
        'financial_goals': 'growth',
        'past_investment_experience': 'novice'
    }
    
    # Example stock tickers (for demonstration, you may need to expand this list)
    stock_tickers = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'META', 'TSLA', 'NVDA', 'NFLX', 'ADBE', 'PYPL',
                     'INTC', 'CSCO', 'PEP', 'KO', 'MCD', 'NKE', 'DIS', 'SBUX', 'PFE', 'JNJ',
                     'PG', 'HD', 'BAC', 'V', 'MA', 'COST', 'UNH', 'T', 'VZ', 'WMT', 
                     'BA', 'GE', 'GM', 'F', 'IBM', 'ORCL', 'CRM', 'UPS', 'FDX', 'RTX', 
                     'CVX', 'XOM', 'COP', 'PSX', 'MPC', 'VLO', 'BMY', 'MRK', 'LLY', 'ABT']
    
    # Analyze user spending behavior
    user_behavior = analyze_user_behavior(user_spending_data, user_profile)
    print("User Behavior Analysis:", user_behavior)
    
    # Fetch and analyze stock trends
    stock_scores = fetch_and_analyze_stocks(stock_tickers)
    
    # Sort stocks by score
    stock_scores.sort(key=lambda x: x['score'], reverse=True)
    
    # Recommend top 10 stocks
    top_10_stocks = stock_scores[:10]
    
    for stock in top_10_stocks:
        stock['recommendation'] = provide_recommendation(user_behavior, stock['analysis'], stock['score'])
    
    print("Top 10 Stock Recommendations:")
    for stock in top_10_stocks:
        print(f"Ticker: {stock['ticker']}, Name: {stock['name']}, Score: {stock['score']}, Recommendation: {stock['recommendation']}")
    
    # Prepare result for frontend
    result = {
        'user_behavior': user_behavior,
        'top_10_stocks': top_10_stocks
    }
    
    # Convert result to JSON
    result_json = json.dumps(result, indent=4)
    return result_json

if __name__ == "__main__":
    result_json = main()
    print(result_json)
