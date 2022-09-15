import Card from 'react-bootstrap/Card'

function GitHubCard() {
    return (
        <card style={{width: '18rem'}}>
            <Card.Img variant="top" src='./src/githubpic.JPG' />
            <Card.Body>
                <Card.Title>Charlotte Strickland</Card.Title>
                <Card.Text>
                    Traveling is one of my favorite things to do.
                    Crocheting is another thing I love to do.
                </Card.Text>           
            </Card.Body>
        </card>
    );
}

export default GitHubCard