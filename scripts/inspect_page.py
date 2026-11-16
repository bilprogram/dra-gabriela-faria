import subprocess
import json

cmd = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "--headless",
    "--disable-gpu",
    "--window-size=1440,900",
    "--virtual-time-budget=2000",
    "--run-all-compositor-stages-before-draw",
    "--dump-dom",
    "http://localhost:3000/index.html"
]

# We can also use python to launch a test script that measures element heights and positions
script = """
const hero = document.getElementById('inicio');
const cuidado = document.getElementById('cuidado');
console.log('HERO OFFSETTOP:', hero ? hero.offsetTop : 'null');
console.log('HERO OFFSETHEIGHT:', hero ? hero.offsetHeight : 'null');
console.log('CUIDADO OFFSETTOP:', cuidado ? cuidado.offsetTop : 'null');
console.log('CUIDADO OFFSETHEIGHT:', cuidado ? cuidado.offsetHeight : 'null');
console.log('DOCUMENT SCROLLHEIGHT:', document.documentElement.scrollHeight);
"""
