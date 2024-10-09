document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('menuButton').addEventListener('click', function() {
        document.getElementById('menuBox').classList.remove('hidden');
    });

    document.getElementById('closeMenu').addEventListener('click', function() {
        document.getElementById('menuBox').classList.add('hidden');
    });

    document.getElementById('hotdog').addEventListener('click', function() {
        document.getElementById('menuBox').classList.add('hidden');
    });

    document.getElementById('hotdog').addEventListener('click', function() {
        document.getElementById('menuBox-hotdog').classList.remove('hidden');
    });
    
    document.getElementById('volta-menu').addEventListener('click', function() {
        document.getElementById('menuBox-hotdog').classList.add('hidden');
    });
    
    document.getElementById('volta-menu').addEventListener('click', function() {
        document.getElementById('menuBox').classList.remove('hidden');
    });
});
