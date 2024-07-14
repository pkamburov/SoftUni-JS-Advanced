function constructionWorker(worker) {

    if (worker.dizziness == true) {
        let requiredAmount = 0.1 * worker.weight * worker.experience;
        worker.levelOfHydrated += requiredAmount;
        worker.dizziness = false;
    } 
    return worker;
}

constructionWorker({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true });

constructionWorker({ weight: 120,
experience: 20,
levelOfHydrated: 200,
dizziness: true});