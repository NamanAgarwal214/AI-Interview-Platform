import tensorflow_hub as hub
import tensorflow_text
from sklearn.metrics.pairwise import cosine_similarity
import sys

# load the USE model
module_url = "https://tfhub.dev/google/universal-sentence-encoder-multilingual-large/3"
model = hub.load(module_url)

question=sys.argv[1]
expected_answer=sys.argv[2]
given_answer=sys.argv[3]

# encode the inputs using the USE model
question_embedding = model([question])[0]
expected_answer_embedding = model([expected_answer])[0]
given_answer_embedding = model([given_answer])[0]

# compute the cosine similarities between the embeddings
question_answer_similarity = cosine_similarity([question_embedding], [expected_answer_embedding])[0][0]
given_answer_similarity = cosine_similarity([question_embedding], [given_answer_embedding])[0][0]

# return the similarity scores
print(question_answer_similarity, given_answer_similarity)