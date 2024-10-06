import fs from 'fs';
import ollama from 'ollama';


const findSuburbState = async (suburbs) => {
    const response = await ollama.generate({
        model: 'llama3.1',
        prompt: `You are given a list of suburbs and you need to find the state of each suburb. Your response
        should be in JSON format as follows: 
          {"Alstonville", "NSW",
          "Brisbane", "QLD",
          "Byron Bay", "NSW",
          }. 
        
        The list of suburbs is as follows:
        ${suburbs}`,
        format: 'json',
    });
    return response;
    };


    const saveToJson = async (suburbs, location) => {
        const result = await findSuburbState(suburbs);
        const response = result.response;
        const json = JSON.parse(response);
        fs.writeFileSync(`${location}/suburbs.json`, JSON.stringify(json, null, 2));
    };

    const main = async () => {
        try{
            await saveToJson(suburbs, location);
        }catch (error){
            console.log('Error', error)
        };
    };
    

let suburbs = `'Queanbeyan', 'Katherine', 'Wagga Wagga', 'Albury','Lavington', 'Jerrabomberra', 'Narooma', 'Queanbeyan East', 'Cooma', 'Melbourne', 'Bungendore', 'Goulburn', 'Kingscliff', 'Lismore', 'Tweed Heads',
 'Alstonville', 'Ballina', 'Cabarita Beach', 'Mt Pleasant', 'Yarrawonga','Darwin', 'Yulara', 'Tumbarumba', 'East Wagga Wagga', 'Mt Omanney', 'Tweed Heads South', 'Kippa Ring', 'Armidale', 'South Lismore',
 'Katherine South', 'Kilgariff', 'Palmerston', 'Healsville', 'Maroochydore','Chatwood', 'Mt Gravatt', 'Holtze', 'Mount Waverly', 'Gosford West', 'Moama','Byron Bay', 'Paicifc Pines', 'Casino', 'Noosa', 'Alice Springs', 'Orange',
'Captains Flat', 'Besse Parade', 'Goonellabah', 'Dubbo' 'Mt Ommaney', 'Bangalow', 'Canberra', 'Lockhart', 'Maclean', 'Cockburn', 'Beerwah', 'Upper Mount Gravatt', 'Noarlunga', 'Burbridge', 'Berrimah', 'Erskine Park',
 'Morley', 'Oconnor', 'Braidwood', 'Bega', 'Greenway', 'Lakehaven', 'Bogangar','Cooroy Stp', 'Malvern', 'Marulan South', 'Mt Kuring-Gai', 'Murwillumbah', 'Nhulunbuy', 'Casuarina', 'Nightcliff', 'Mildura', 'Renmark', 'Griffith',
 'Frankston', 'Campbeltown', 'Brisbane', 'Baringa', 'Banora Point', 'Bletchington', 'Warrambool', 'Berrigan', 'Deniliquin', 'Malak', 'Tindal', 'Hobart', 'Avalon', 'Murrarie'`;
// const result= await findSuburbState(suburbs);
let location = '../data/';

main();