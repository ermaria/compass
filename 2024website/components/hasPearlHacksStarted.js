export const hasPearlHacksStarted = () => {
    return !(new Date() < new Date('2024-02-24T11:00:00-05:00'));
}

export const canIDeployLiveNow = () => {
    return (new Date() >= new Date('2024-02-22T17:00:00-05:00'));
}