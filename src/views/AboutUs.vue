<template>
<div class="container">
<div class="card mb-3 bg-black text-white">
    <div class="card-body">
        <h1 class="card-title text-center">Notre Mission</h1>
        <p>Nous sommes une société d’assurance (auto, moto, vélo,…). Elle vous charge de développer une application web capable de prédire pour ces nouveaux clients les types d’accidents qu’ils sont le plus susceptible de causer :
<ul>
    <li>Type de collision </li>
    <li>Gravité de blessure</li>
</ul>
</p>
    </div>
</div>
<div class="card shadow mb-3">
    <div class="card-body">
        <h1 class="card-title text-primary text-center">Notre équipe</h1>
        <div class="row">
            <div class="col text-center">
                <figure>
                    <img src="@/assets/thuy.jpg" class="avatar" alt="">
                    <figcaption>Thuy</figcaption>
                </figure>
                <p>Développeuse IA (Python, JS, CSS)</p>
                <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
                <img src="@/assets/thuyqr.png" class="img-fluid qrcode">
            </div>
            <div class="col text-center">
                <figure>
                    <img src="@/assets/yanice.jpg" class="avatar" alt="">
                    <figcaption>Yanice</figcaption>
                </figure>
                <p>Développeur IA (Python, JS, CSS)</p>
                <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
                <img src="@/assets/yaniceqr.png" class="img-fluid qrcode">
            </div>
        </div>
    </div>
</div>
</div>
</template>
<style lang="scss" scoped>
.avatar {
    border-radius: 50%;
    height: 100px;
    width: 100px;
}
.qrcode {
    max-width: 200px;
}
</style>