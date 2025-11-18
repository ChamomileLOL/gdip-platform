// 1. Load the Tools
const Metric = require('../models/Metric'); // Get the Metric Form Blueprint

// --- THE ACS CALCULATION FORMULA ---
const calculateACS = (reliability, consistency, volume) => {
    // ACS = (50% * Reliability) + (30% * Consistency) + (20% * Volume)
    const score = (reliability * 0.50) + (consistency * 0.30) + (volume * 0.20);
    // We make sure the score is rounded nicely
    return Math.round(score * 100) / 100;
};

// --- DOORKEEPER 1: CREATE A NEW METRIC (The most important action) ---
exports.createMetric = async (req, res) => {
    try {
        // Step A: Get the numbers from the user's request (the form data)
        const { sourceReliability, schemaConsistency, volume } = req.body;

        // Step B: Run the Calculation!
        const automatedConfidenceScore = calculateACS(
            sourceReliability, 
            schemaConsistency, 
            volume
        );

        // Step C: Create the Metric object, adding the calculated score
        const newMetric = await Metric.create({
            ...req.body, // This includes name, description, owner, etc.
            automatedConfidenceScore // This is the calculated number
        });

        // Step D: Tell the user it worked! (Status 201 means "Created")
        res.status(201).json({
            success: true,
            data: newMetric
        });

    } catch (error) {
        // Step E: If there is an error (e.g., duplicate name), tell the user
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

// --- DOORKEEPER 2: GET ALL METRICS (The 'Show Me Everything' action) ---
exports.getMetrics = async (req, res) => {
    try {
        // Find ALL metrics in the Memory Center
        const metrics = await Metric.find();

        // Send the list back to the user
        res.status(200).json({
            success: true,
            count: metrics.length,
            data: metrics
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};