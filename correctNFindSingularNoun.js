import ollama from 'ollama';

const correctNFindSingularNoun = async (nouns) => {
    const response = await ollama.generate({
        model: 'llama3.1',
        prompt: `You are given a list of plural nouns and you need to correct the spelling  and conform them to singular nouns. Your response should be in JSON format as follows: 
          {"apple", "apples",
          "banana", "bananas",
          "cherry", "cherries",
          }. 
         
        The list of plural nouns is as follows:
        ${nouns}`,
        format: 'json',
    });
    return response;
    }