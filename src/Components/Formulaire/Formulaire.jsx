import React from 'react';
const Formulaire = () => {
    return (
        <div>
            <form >

                <label >Objetctif :</label>
                <input type="text"  id="Objectif" /><br />
                <label >Date :</label> <input type="date"  id="Date" />
                <input type="button" value="Envoyer" />
            </form>


            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                Type
            </button>


            <div class="modal" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">


                        <div class="modal-header">
                            <h4 class="modal-title">Modal Heading</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>


                        <div class="modal-body">
                            <form >
                                <select name="" id="">
                                    <option value="Depense">Depense </option>
                                    <option value="Revenue">revenue    </option>
                                </select> <br />
                                <label >Nom :</label><input type="text" name="" id="" /> <br />
                                <label >Coût :</label><input type="text" name="" id="" /><br />
                                <input type="checkbox" name="" id="" /><label >x1</label><br />
                                <strong>Or</strong><br />
                                <input type="text" name="" id="" /><label>Periode(Jour)</label>
                                <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Envoyer</button>
                        </div>
                            </form>

                        </div>


                        

                    </div>
                </div>
            </div>


        </div>
    )
}
export default Formulaire;