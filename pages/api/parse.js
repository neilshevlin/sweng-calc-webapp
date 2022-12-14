import { evaluateExpression } from '../../controllers/evaluate_expression';
// import { testing } from '../../controllers/eval_alpha';

export default function handler(req, res) {
    let answer = evaluateExpression(req.body.string);

    if (answer == false){
        res.status(400).json({ error: 'Invalid expression' });
    } else {
        res.status(200).json({ answer: answer });
    }
}