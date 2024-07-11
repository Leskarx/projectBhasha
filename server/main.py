import os
import sys
import transformers
import tensorflow as tf
from datasets import load_dataset
from transformers import AutoTokenizer
from transformers import TFAutoModelForSeq2SeqLM, DataCollatorForSeq2Seq, TFMarianMTModel
from transformers import AdamWeightDecay
from transformers import AutoTokenizer, TFAutoModelForSeq2SeqLM

sys.stdin.reconfigure(encoding='utf-8')
sys.stdout.reconfigure(encoding='utf-8')

input_text  = sys.argv[1]
lang  = sys.argv[2]
# lang="hi"
# input_text  = "hello good morning"


model_checkpoint = "Helsinki-NLP/opus-mt-en-hi"
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)
model =  TFMarianMTModel.from_pretrained("tf_model/")
tokenized = tokenizer([input_text], return_tensors='np')
out = model.generate(**tokenized, max_length=128)
with tokenizer.as_target_tokenizer():  
 print(tokenizer.decode(out[0], skip_special_tokens=True))  


# print(i_text)



       

    
# print("hello")


sys.stdout.flush()

