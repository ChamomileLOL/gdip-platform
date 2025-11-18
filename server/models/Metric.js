const mongoose = require('mongoose');

const MetricSchema = new mongoose.Schema({
    // Core Metric Details
    name: { 
        type: String, 
        required: true, 
        unique: true 
    },
    description: { 
        type: String 
    },
    owner: { 
        type: String, 
        required: true 
    }, 
    
    // ACS Input Factors (Required for calculation)
    sourceReliability: { 
        type: Number, 
        required: true, 
        default: 0 
    }, // 50% weight
    schemaConsistency: { 
        type: Number, 
        required: true, 
        default: 0 
    }, // 30% weight
    volume: { 
        type: Number, 
        required: true, 
        default: 0 
    }, // 20% weight
    
    // The Output Score (Calculated)
    automatedConfidenceScore: { 
        type: Number, 
        default: 0 
    },
    
    // Governance & Metadata
    status: { 
        type: String, 
        enum: ['Draft', 'Validated', 'Retired'], 
        default: 'Draft' 
    },
}, { timestamps: true });

module.exports = mongoose.model('Metric', MetricSchema);