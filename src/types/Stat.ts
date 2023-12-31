export interface StatisticsProps {
    totalBikes: number;
    availableBikes: number;
    bookedBikes: number;
    averageCost: number;
}

export interface ApiError {
    status: number;
    data: {
        error: string;
        message: string[];
        statusCode: number;
    };
}