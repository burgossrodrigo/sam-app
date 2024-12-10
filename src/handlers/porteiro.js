const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });

const ec2 = new AWS.EC2({
    apiVersion: '2016-11-15',
});

const params = {
    InstanceIds: ['i-07138e4d923212c72'],
}

exports.startEC2Instance = () => {
    return ec2.startInstances(params, (err, data) => {
        if(err)
            console.error(err, err.stack);
        else
            console.log("Porteiro ligado com sucesso");
    })
}

exports.stopEC2Instance = () => {
    return ec2.stopInstances(params, (err, data) => {
        if(err)
            console.error(err, err.stack);
        else
            console.log("Porteiro desligado com sucesso");
    })
}