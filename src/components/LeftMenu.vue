<template>
    <div>
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
            <div class="sidebar-sticky">
                <ul class="nav flex-column">
                    <li class="nav-item">
                    <a class="nav-link" href="/campaigns">
                        Campañas
                    </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/beacons">
                            Beacons
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/settings">
                            Ajustes
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/reports">
                            Reportes
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'SideBar'
}
</script>

