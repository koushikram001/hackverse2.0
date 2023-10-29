from flask import Flask, request, render_template
import replicate
import openai
api_key = "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"
openai.api_key = api_key

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/fitbot', methods=['POST'])
def calculate():
    
    prompt = request.form['prompt']
    
    # ai-content-starts
    response = openai.Completion.create(
        engine="text-davinci-003",  # Use the text-davinci-003 engine
        prompt=prompt,
        max_tokens=50,  # Adjust the number of tokens as needed
        n=1,  # Generate a single completion
        stop=None,  # Optionally specify stop criteria
        temperature=0.7,  # Adjust the temperature for randomness
    )
    generated_text = response.choices[0].text
    # ai-content-ends
    return render_template('index.html', result=generated_text)

@app.route('/progress', methods=['POST'])
def progress():
    f = open("progress.json")
    info = f.read()

    prompt = info + "generate a progress analysis for above in 50 words"
    
    # ai-content-starts
    response = openai.Completion.create(
        engine="text-davinci-003",  # Use the text-davinci-003 engine
        prompt=prompt,
        max_tokens=256,  # Adjust the number of tokens as needed
        n=1,  # Generate a single completion
        stop=None,  # Optionally specify stop criteria
        temperature=0.7,  # Adjust the temperature for randomness
    )
    generated_text = response.choices[0].text
    # ai-content-ends
    return render_template('index.html', progress=generated_text)

if __name__ == '__main__':
    app.run(debug=True)
