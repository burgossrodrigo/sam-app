const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });

const ec2 = new AWS.EC2({
    apiVersion: '2016-11-15',
});

const params = {
    InstanceIds: ['i-07138e4d923212c72'],
};

// Function to start EC2 instances
exports.startEC2Instances = async () => {
    try {
        const data = await ec2.startInstances(params).promise(); // Use .promise() for promise-based handling
        console.log("EC2 instance started successfully:", data);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "EC2 instance started successfully", data: data })
        };
    } catch (err) {
        console.error("Error starting EC2 instance:", err);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Failed to start EC2 instance", error: err.message })
        };
    }
};

// Function to stop EC2 instances
exports.stopEC2Instance = async () => {
    try {
        const data = await ec2.stopInstances(params).promise(); // Use .promise() for promise-based handling
        console.log("EC2 instance stopped successfully:", data);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "EC2 instance stopped successfully", data: data })
        };
    } catch (err) {
        console.error("Error stopping EC2 instance:", err);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Failed to stop EC2 instance", error: err.message })
        };
    }
};
